// src/services/socket.js
import { io } from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
let socket;

/**
 * Inicializa a conexão do socket
 * @param {string} token - Token JWT do usuário
 * @returns {Socket} Instância do socket
 */
export const initSocket = (token) => {
  if (!socket) {
    console.log('Inicializando socket com token:', token ? 'presente' : 'ausente');
    socket = io(API_URL, {
      auth: { token },
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      withCredentials: true, // Adicione esta linha para CORS
    });

    socket.on('connect', () => {
      console.log('Socket conectado:', socket.id);
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket desconectado. Razão:', reason);
      if (reason === 'io server disconnect') {
        // Reconecta manualmente se o servidor desconectar
        socket.connect();
      }
    });

    socket.on('connect_error', (err) => {
      console.error('Erro de conexão:', err.message);
      console.error('Detalhes do erro:', err);
      
      // Tenta reconectar após um delay
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });
  }
  return socket;
};

/**
 * Obtém a instância atual do socket
 * @returns {Socket|null} Instância do socket ou null
 */
export const getSocket = () => socket;

/**
 * Configura um listener para notificações
 * @param {function} callback - Função a ser chamada quando uma notificação chegar
 */
export const setupNotificationListener = (callback) => {
  if (socket) {
    socket.on('new-notification', callback);
  } else {
    console.warn('Socket não inicializado');
  }
};

/**
 * Remove todos os listeners de notificação
 */
export const removeNotificationListeners = () => {
  if (socket) {
    socket.off('new-notification');
  }
};

/**
 * Desconecta o socket
 */
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};