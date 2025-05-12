import React, { createContext, useContext, useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Prioriza o tema dark para mobile
    if (Capacitor.isNativePlatform()) {
      return 'dark';
    }
    
    // Para web, verifica preferência salva ou usa dark como padrão
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      
      // Atualiza a status bar no Android
      if (Capacitor.isNativePlatform()) {
        StatusBar.setStyle({
          style: newTheme === 'dark' ? Style.Dark : Style.Light
        });
      }
      
      return newTheme;
    });
  };

  // Aplica o tema ao body e configura a Status Bar
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    
    if (Capacitor.isNativePlatform()) {
      // Configurações específicas para Android
      StatusBar.setBackgroundColor({ 
        color: theme === 'dark' ? '#121212' : '#ffffff'
      });
      StatusBar.setStyle({
        style: theme === 'dark' ? Style.Dark : Style.Light
      });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};