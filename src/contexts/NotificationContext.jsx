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
    if (socket) {
      socket.disconnect();
      setSocket(null);
    }
    return;
  }

  // Inicializa notificações nativas
  const initializeNotifications = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        await initNotifications();
      } catch (error) {
        console.error('Notification initialization error:', error);
      }
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().catch(console.error);
    }
  };
  initializeNotifications();

  // Configuração do WebSocket
  const setupSocket = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const newSocket = initSocket(token);
    
    // Evento de conexão estabelecida
    newSocket.on('connect', () => {
      console.log('WebSocket connected');
      // Autentica o socket após conexão
      newSocket.emit('authenticate', token);
    });

    // Evento de erro de conexão
    newSocket.on('connect_error', (err) => {
      console.error('WebSocket connection error:', err.message);
      
      // Tentativa de reconexão após um delay
      setTimeout(() => {
        console.log('Attempting to reconnect WebSocket...');
        newSocket.connect();
      }, 5000); // 5 segundos
    });

    // Evento de desconexão
    newSocket.on('disconnect', (reason) => {
      console.log('WebSocket disconnected:', reason);
      
      // Reconecta apenas se não foi uma desconexão intencional
      if (reason !== 'io client disconnect') {
        setTimeout(() => {
          console.log('Reconnecting after disconnect...');
          newSocket.connect();
        }, 3000); // 3 segundos
      }
    });

    // Evento de reconexão falha
    newSocket.on('reconnect_failed', () => {
      console.error('WebSocket reconnection failed');
    });

    // Evento de nova notificação
    newSocket.on('new-notification', handleNewNotification);

    // Evento de notificações marcadas como lidas
    newSocket.on('notifications-read', (readIds) => {
      setNotifications(prev => 
        prev.map(n => 
          readIds.includes(n._id) ? { ...n, read: true } : n
        )
      );
    });

    return newSocket;
  };

  const socketInstance = setupSocket();
  setSocket(socketInstance);

  // Carrega dados iniciais com tratamento de erro
  const loadInitialData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        loadNotifications(),
        loadUnreadCount()
      ]);
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      setLoading(false);
    }
  };

  loadInitialData();

  // Verifica periodicamente a conexão (opcional)
  const connectionCheckInterval = setInterval(() => {
    if (socketInstance && !socketInstance.connected) {
      console.log('WebSocket not connected, attempting to reconnect...');
      socketInstance.connect();
    }
  }, 30000); // A cada 30 segundos

  // Cleanup
  return () => {
    clearInterval(connectionCheckInterval);
    if (socketInstance) {
      socketInstance.off('connect');
      socketInstance.off('connect_error');
      socketInstance.off('disconnect');
      socketInstance.off('reconnect_failed');
      socketInstance.off('new-notification');
      socketInstance.off('notifications-read');
      socketInstance.disconnect();
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