// components/MentionInput.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';

// Estilos para o componente (mantidos os mesmos)
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--input-bg);
  color: var(--text);
  resize: vertical;
  transition: var(--transition);
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.2);
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  z-index: 100;
`;

const SuggestionItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &:hover {
    background: rgba(255, 69, 0, 0.1);
  }
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const MentionInput = ({ value, onChange, placeholder }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [mentionQuery, setMentionQuery] = useState('');
    const [mentionStartPos, setMentionStartPos] = useState(0);
    const inputRef = useRef(null);
  
    const handleInputChange = (e) => {
      const text = e.target.value;
      onChange(text);
      
      // Verifica se estamos digitando após um @
      const cursorPos = e.target.selectionStart;
      const textBeforeCursor = text.substring(0, cursorPos);
      const lastAtPos = textBeforeCursor.lastIndexOf('@');
      
      if (lastAtPos >= 0) {
        // Verifica se o @ não é parte de uma menção já completada
        const afterAt = textBeforeCursor.substring(lastAtPos + 1);
        const isInWord = /\w/.test(afterAt) && !/\s/.test(afterAt);
        
        if (isInWord) {
          const query = text.substring(lastAtPos + 1, cursorPos);
          setMentionQuery(query);
          setMentionStartPos(lastAtPos);
          if (query.length >= 1) {
            fetchMentions(query);
            setShowSuggestions(true);
          } else {
            setShowSuggestions(false);
          }
          return;
        }
      }
      
      setShowSuggestions(false);
    };
  
    const fetchMentions = async (query) => {
      if (!query || query.length < 1) {
        setShowSuggestions(false);
        return;
      }
    
      try {
        const response = await api.get('/users/search', {
          params: { q: query }
        });
    
        if (response.data && response.data.success && Array.isArray(response.data.data)) {
          setSuggestions(response.data.data);
          setShowSuggestions(response.data.data.length > 0);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch (error) {
        console.error('Error fetching mentions:', error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };
  
    const handleSelectMention = (username) => {
      console.log('Selecionando:', username, 'Posição:', mentionStartPos, 'Query:', mentionQuery);
      
      const text = value;
      const before = text.substring(0, mentionStartPos);
      const after = text.substring(mentionStartPos + mentionQuery.length + 1);
      const newText = `${before}@${username} ${after}`;
      
      onChange(newText);
      setShowSuggestions(false);
      
      // Foca no input e posiciona o cursor após a menção
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          const cursorPos = mentionStartPos + username.length + 2; // +2 para o @ e espaço
          inputRef.current.setSelectionRange(cursorPos, cursorPos);
        }
      }, 0);
    };

    // Fecha as sugestões quando clica fora
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // Fecha as sugestões ao pressionar Escape
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    return (
      <InputContainer>
        <StyledTextarea
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          onClick={() => setShowSuggestions(false)}
        />
        {showSuggestions && suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map(user => (
              <SuggestionItem 
                key={user._id} 
                onClick={() => handleSelectMention(user.username)}
              >
                <Avatar 
                  src={
                    user.profile?.avatar 
                      ? user.profile.avatar.startsWith('http') 
                        ? user.profile.avatar 
                        : `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${user.profile.avatar}`
                      : 'https://i.pravatar.cc/150?img=3'
                  }
                  alt={user.username}
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = 'https://i.pravatar.cc/150?img=3';
                  }}
                />
                <span>@{user.username}</span>
                {user.profile?.displayName && (
                  <span style={{ color: 'var(--text-light)', fontSize: '0.9em' }}>
                    ({user.profile.displayName})
                  </span>
                )}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </InputContainer>
    );
};

export default MentionInput;