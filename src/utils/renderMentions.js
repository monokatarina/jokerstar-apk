// utils/renderMentions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const renderMentions = (text, mentionMap, navigate) => {
  if (!text) return null;
  
  const parts = text.split(/(@\w+)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith('@')) {
      const username = part.substring(1);
      const userId = mentionMap[username];
      
      if (!userId) return part;
      
      return (
        <span 
          key={`${username}-${i}`}
          className="mention"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/users/${userId}`);
          }}
        >
          {part}
        </span>
      );
    }
    return part;
  });
};