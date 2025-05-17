import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

export const initNotifications = async () => {
  if (!Capacitor.isNativePlatform()) return;

  // Solicita permissões
  let permissionStatus = await PushNotifications.checkPermissions();
  
  if (permissionStatus.receive !== 'granted') {
    permissionStatus = await PushNotifications.requestPermissions();
    if (permissionStatus.receive !== 'granted') {
      throw new Error('Permissão negada para notificações');
    }
  }

  // Registra para push
  await PushNotifications.register();

  // Configura listeners
  PushNotifications.addListener('registration', (token) => {
    console.log('Push registration success, token:', token.value);
    // Envie este token para seu backend
    api.post('/notifications/register', { token: token.value });
  });

  PushNotifications.addListener('registrationError', (error) => {
    console.error('Push registration error:', error);
  });

  PushNotifications.addListener('pushNotificationReceived', (notification) => {
    console.log('Push received:', notification);
    showLocalNotification(notification);
  });

  // Configura notificações locais
  await LocalNotifications.requestPermissions();
};

const showLocalNotification = async (notification) => {
  await LocalNotifications.schedule({
    notifications: [{
      title: notification.title,
      body: notification.body,
      id: new Date().getTime(),
      extra: notification.data
    }]
  });
};