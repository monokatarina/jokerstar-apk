// src/services/socket.js
import { io } from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
let socket;

// Função para garantir conexão imediata
export const ensureSocketConnection = (token) => {
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
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      timeout: 20000,
      withCredentials: true,
      upgrade: false,
    });

    // Eventos de conexão
    socket.on('connect', () => {
      console.log('[Socket] Conectado com ID:', socket.id);
      socket.emit('client-ready');
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

    // Heartbeat para manter conexão ativa
    setInterval(() => {
      if (socket.connected) {
        socket.emit('heartbeat', { timestamp: Date.now() });
      }
    }, 30000);
  }
  return socket;
};

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

export const setupNotificationListener = (callback) => {
  if (socket) {
    socket.on('new-notification', callback);
  } else {
    console.warn('Socket não inicializado');
  }
};

export const removeNotificationListeners = () => {
  if (socket) {
    socket.off('new-notification');
  }
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

// Exportação consolidada de todas as funções
export default {
  initSocket,
  getSocket,
  disconnectSocket,
  ensureSocketConnection,
  emitWithAck,
  setupNotificationListener,
  removeNotificationListeners
};