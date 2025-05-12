// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { checkAuth, logout as apiLogout } from '../services/auth';
import api from '../services/api';
import { initSocket, disconnectSocket } from '../services/socket';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  /**
   * Solicita permissão para notificações do navegador
   * @returns {Promise<boolean>} Retorna true se a permissão foi concedida
   */
  const requestNotificationPermission = useCallback(async () => {
    try {
      if (!('Notification' in window)) {
        console.warn('Este navegador não suporta notificações desktop');
        return false;
      }

      if (Notification.permission === 'granted') {
        return true;
      }

      if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Permissão para notificações concedida');
          return true;
        }
      }

      console.log('Permissão para notificações não concedida');
      return false;
    } catch (error) {
      console.error('Erro ao solicitar permissão de notificações:', error);
      return false;
    }
  }, []);

  /**
   * Verifica a autenticação do usuário
   */
  const verifyAuth = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      setInitialCheckDone(true);
      return;
    }
  
    try {
      setLoading(true);
      const response = await checkAuth();
      setUser(response?.user || null);
      
      // Solicita permissão para notificações após verificar autenticação
      if (response?.user?.settings?.notificationsEnabled !== false) {
        await requestNotificationPermission();
      }
    } catch (error) {
      console.error('Falha na verificação de autenticação:', error);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
      setInitialCheckDone(true);
    }
  }, [requestNotificationPermission]);

  /**
   * Realiza o login do usuário
   */
  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);
      const response = await apiLogin(credentials);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      
      // Solicita permissão para notificações se o usuário permitiu
      if (response.user?.settings?.notificationsEnabled !== false) {
        await requestNotificationPermission();
      }
      
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [requestNotificationPermission]);

  /**
   * Realiza o logout do usuário
   */
  const logout = useCallback(async () => {
    try {
      await apiLogout();
      localStorage.removeItem('token');
      setUser(null);
      disconnectSocket(); // Desconecta o socket ao fazer logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);
  /**
   * Atualiza os dados do usuário
   */
  const updateUser = useCallback(async (updates, shouldRevalidate = true) => {
    try {
      // Atualização otimista
      setUser(prev => ({ ...prev, ...updates }));
      
      if (shouldRevalidate) {
        await verifyAuth();
      }
    } catch (error) {
      console.error('Falha ao atualizar usuário:', error);
      throw error;
    }
  }, [verifyAuth]);

  /**
   * Atualiza o avatar do usuário
   */
  const updateAvatar = useCallback(async (avatarFile) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarFile);
      
      const { data } = await api.put('/users/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      await updateUser(data);
      return data;
    } catch (error) {
      console.error('Falha ao atualizar avatar:', error);
      throw error;
    }
  }, [updateUser]);

  /**
   * Atualiza as preferências de notificação
   */
  const updateNotificationPreferences = useCallback(async (enabled) => {
    try {
      await api.patch('/users/settings', { notificationsEnabled: enabled });
      await updateUser({ settings: { ...user.settings, notificationsEnabled: enabled } }, false);
      
      if (enabled) {
        await requestNotificationPermission();
      }
      
      return true;
    } catch (error) {
      console.error('Falha ao atualizar preferências:', error);
      throw error;
    }
  }, [user, updateUser, requestNotificationPermission]);

  // Verifica autenticação na inicialização
  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      initialCheckDone,
      verifyAuth,
      login,
      logout,
      updateUser,
      updateAvatar,
      updateNotificationPreferences,
      requestNotificationPermission
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};