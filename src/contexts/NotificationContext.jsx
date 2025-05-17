// contexts/NotificationContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';
import { initSocket } from '../services/socket';
import { debounce } from 'lodash';
import { initNotifications } from '../utils/notifications';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);

  // Debounced version of setNotifications to prevent rapid updates
  const setNotificationsDirectly = useCallback((newNotifications) => {
    setNotifications(newNotifications);
  }, []);

  // Carrega notificações iniciais
  const loadNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/notifications', {
        params: { limit: 20, skip: 0, sort: '-createdAt' }
      });
      
      // Verifica a estrutura dos dados e atualiza o estado
      const notificationsData = Array.isArray(response.data?.data) 
        ? response.data.data 
        : [];
      
      setNotificationsDirectly(notificationsData);
    } catch (error) {
      console.error('Failed to load notifications:', error);
      setNotificationsDirectly([]);
    } finally {
      setLoading(false);
    }
  }, [setNotificationsDirectly]);

  // Carrega contagem de não lidas
  const loadUnreadCount = useCallback(async () => {
    if (!user) return;
    try {
      const response = await api.get('/notifications/unread-count');
      setUnreadCount(response.data.count || 0);
    } catch (error) {
      console.error('Failed to load unread count:', error);
      setUnreadCount(0);
    }
  }, [user]);

  // Marca notificações como lidas
  const markAsRead = useCallback(async (notificationIds) => {
    if (!notificationIds || notificationIds.length === 0) return;
    try {
      await api.post('/notifications/mark-read', { notificationIds });
      setUnreadCount(prev => Math.max(0, prev - notificationIds.length));
      setNotifications(prev => 
        prev.map(n => 
          notificationIds.includes(n._id) ? { ...n, read: true } : n
        )
      );
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  }, []);

  // Limpa todas as notificações
  const clearAllNotifications = useCallback(async () => {
    try {
      await api.delete('/notifications');
      setNotifications([]);
      setUnreadCount(0);
      return true;
    } catch (error) {
      console.error('Failed to clear notifications:', error);
      return false;
    }
  }, []);

  // Função para mostrar alerta de notificação
  const showNotificationAlert = useCallback((notification) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = getNotificationTitle(notification);
      const options = {
        body: getNotificationBody(notification),
        icon: notification.sender?.profile?.avatar || '/logo192.png',
        badge: '/logo192.png'
      };
      
      // Fecha notificações anteriores para evitar acúmulo
      if (window.lastNotification) {
        window.lastNotification.close();
      }
      
      window.lastNotification = new Notification(title, options);
      
      // Configura ação ao clicar na notificação
      window.lastNotification.onclick = () => {
        window.focus();
        if (notification.meme) {
          window.location.href = `/memes/${notification.meme._id}`;
        } else if (notification.comment) {
          window.location.href = `/comments/${notification.comment._id}`;
        } else if (notification.reply) {
          window.location.href = `/replies/${notification.reply._id}`;
        }
      };
    }
  }, []);

  // Handler para novas notificações via WebSocket
const handleNewNotification = useCallback((notification) => {
  console.log('Nova notificação recebida (antes do estado):', notification);
  
  setNotifications(prev => {
    const newNotifications = [notification, ...prev].slice(0, 100);
    console.log('Notificações após atualização:', newNotifications);
    return newNotifications;
  });
  
  setUnreadCount(prev => prev + 1);
  
  if (document.visibilityState !== 'visible') {
    showNotificationAlert(notification);
  }
}, [showNotificationAlert]);

  // Configura WebSocket e carrega dados iniciais
  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    // Inicializa notificações nativas
    if (Capacitor.isNativePlatform()) {
      initNotifications().catch(console.error);
    } else {
      // Configuração para web
      if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission();
      }
    }

    // Inicializa o socket
    const token = localStorage.getItem('token');
    const newSocket = initSocket(token);
    setSocket(newSocket);

    // Configura handlers de eventos
    newSocket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    newSocket.on('new-notification', handleNewNotification);

    // Carrega dados iniciais
    const loadInitialData = async () => {
      try {
        await Promise.all([loadNotifications(), loadUnreadCount()]);
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    };
    
    loadInitialData();

    // Cleanup
    return () => {
      if (newSocket) {
        newSocket.off('new-notification', handleNewNotification);
        newSocket.disconnect();
      }
    };
  }, [user, handleNewNotification, loadNotifications, loadUnreadCount]);

  // Funções auxiliares para texto de notificação
  const getNotificationTitle = (notification) => {
    switch(notification.type) {
      case 'like':
        return `${notification.sender?.username || 'Alguém'} curtiu seu meme`;
      case 'like_grouped':
        return `Seu meme tem ${notification.metadata?.count || 'muitas'} curtidas`;
      case 'comment':
        return `${notification.sender?.username || 'Alguém'} comentou no seu meme`;
      case 'comment_grouped':
        return `Seu meme tem ${notification.metadata?.count || 'muitos'} comentários`;
      case 'reply':
        return `${notification.sender?.username || 'Alguém'} respondeu seu comentário`;
      case 'mention':
        return `${notification.sender?.username || 'Alguém'} te mencionou`;
      default:
        return 'Nova notificação';
    }
  };
  
  const getNotificationBody = (notification) => {
    switch(notification.type) {
      case 'like':
      case 'comment':
        return notification.meme?.caption 
          ? truncate(notification.meme.caption, 50) 
          : 'Veja agora';
      case 'like_grouped':
      case 'comment_grouped':
        return notification.meme?.caption 
          ? truncate(notification.meme.caption, 50) 
          : 'Veja todas as interações';
      case 'reply':
        return notification.reply?.text 
          ? truncate(notification.reply.text, 50) 
          : 'Veja a resposta';
      case 'mention':
        return notification.comment?.text 
          ? truncate(notification.comment.text, 50) 
          : 'Veja a menção';
      default:
        return '';
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        loading,
        markAsRead,
        clearAllNotifications,
        loadNotifications,
        loadUnreadCount
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};