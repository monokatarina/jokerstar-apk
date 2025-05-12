// utils/mentionUtils.js
import api from '../services/api';

export const extractMentions = async (text) => {
  if (!text) return [];
  
  const mentionRegex = /@([a-zA-Z0-9_]+)/g;
  const matches = [...text.matchAll(mentionRegex)];
  const uniqueUsernames = [...new Set(matches.map(m => m[1]))];
  
  if (uniqueUsernames.length === 0) return [];

  try {
    const response = await api.post('/users/validate-mentions', {
      usernames: uniqueUsernames
    });
    
    // Criar um mapa de username para userId para fácil acesso
    const mentionMap = {};
    response.data.validUsers.forEach(user => {
      mentionMap[user.username] = user.userId;
    });
    
    return {
      mentions: response.data.validUsers,
      mentionMap
    };
  } catch (error) {
    console.error('Error validating mentions:', error);
    return { mentions: [], mentionMap: {} };
  }
};