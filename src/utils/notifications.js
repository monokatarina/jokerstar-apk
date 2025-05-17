import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

export const initNotifications = async () => {
  if (!Capacitor.isNativePlatform()) {
    // Configuração para web
    if ('Notification' in window && Notification.permission !== 'denied') {
      await Notification.requestPermission();
    }
    return;
  }

  // Configuração para mobile
  const permissionStatus = await LocalNotifications.requestPermissions();
  
  if (permissionStatus.display !== 'granted') {
    throw new Error('Permissão negada para notificações');
  }

  // Configura listeners para notificações locais
  LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
    console.log('Notificação local clicada:', notification);
    // Navegação baseada nos dados extras
    if (notification.notification.extra?.memeId) {
      window.location.href = `/memes/${notification.notification.extra.memeId}`;
    }
  });
};

export const showLocalNotification = async (title, body, data = {}) => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.schedule({
      notifications: [{
        title,
        body,
        id: new Date().getTime(),
        extra: data,
        smallIcon: 'ic_stat_icon', // Nome do ícone (deve estar nos recursos Android)
        iconColor: '#121212' // Cor do ícone
      }]
    });
  } else if ('Notification' in window && Notification.permission === 'granted') {
    // Fallback para web
    const notification = new Notification(title, {
      body,
      data,
      icon: '/logo192.png'
    });
    
    notification.onclick = () => {
      if (data.memeId) {
        window.location.href = `/memes/${data.memeId}`;
      }
    };
  }
};