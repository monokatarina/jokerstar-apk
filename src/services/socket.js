// src/services/socket.js
import { io } from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
let socket;

// Nova função para garantir conexão imediata
const ensureSocketConnection = (token) => {
  if (!socket || !socket.connected) {
    return initSocket(token);
  }
  return socket;
};

export const initSocket = (token) => {
  if (!socket) {
    console.log('[Socket] Inicializando conexão...');
    socket = io(API_URL, {
      auth: { token },
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity, // Tentativas ilimitadas
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      timeout: 20000,
      withCredentials: true,
      upgrade: false, // Força WebSocket apenas
    });

    // Eventos melhorados
    socket.on('connect', () => {
      console.log('[Socket] Conectado com ID:', socket.id);
      socket.emit('client-ready'); // Novo evento para sincronização imediata
    });

    socket.on('disconnect', (reason) => {
      console.log('[Socket] Desconectado. Razão:', reason);
      if (reason === 'io server disconnect') {
        setTimeout(() => socket.connect(), 1000);
      }
    });

    socket.on('connect_error', (err) => {
      console.error('[Socket] Erro de conexão:', err.message);
      setTimeout(() => socket.connect(), 2000);
    });

    // Novo: Heartbeat para manter conexão ativa
    setInterval(() => {
      if (socket.connected) {
        socket.emit('heartbeat', { timestamp: Date.now() });
      }
    }, 30000);
  }
  return socket;
};

// Nova função para emitir eventos com confirmação
export const emitWithAck = async (event, data, timeout = 5000) => {
  if (!socket) throw new Error('Socket não inicializado');
  
  try {
    const response = await Promise.race([
      socket.emitWithAck(event, data),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), timeout)
    )]);
    return response;
  } catch (err) {
    console.error(`[Socket] Erro no evento ${event}:`, err);
    throw err;
  }
};

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