import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiMessageSquare, FiShare2, FiRepeat, FiTrash2, FiX, FiCheck, FiChevronDown } from 'react-icons/fi';
import { FaSmile, FaAngry, FaCheck, FaEllipsisH } from 'react-icons/fa';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import CommentSection from './CommentSection';
import { useNavigate } from 'react-router-dom';
import { renderMentions } from '../utils/renderMentions';
import { extractMentions } from '../utils/mentionUtils';

// Animations
const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100%); opacity: 0; }
`;

// Estilos
const MobileCommentSection = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70vh;
    max-height: 70vh;
    background: var(--card-bg);
    z-index: 1000;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: translateY(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    touch-action: pan-y;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      background: var(--text-light);
      border-radius: 2px;
      opacity: 0.5;
    }
  }
`;

const CommentSectionContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  padding-bottom: 0;
`;

const CommentFormContainer = styled.div`
  position: sticky;
  bottom: 0;
  padding: 12px;
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
`;

const CloseCommentsButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-light);
  z-index: 10;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(0,0,0,0.1);
  }
`;

const CommentToggleButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  color: ${props => props.$active ? 'var(--primary)' : 'var(--text-light)'};
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: var(--primary);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

const OptionsButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const ConfirmationDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const DialogContent = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: var(--radius-md);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const DialogTitle = styled.h3`
  margin: 0 0 1.5rem;
  color: var(--text);
  font-size: 1.2rem;
  text-align: center;
`;

const DialogButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const DialogButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:first-child {
    background: var(--danger);
    color: white;
    
    &:hover {
      background: var(--danger-hover);
      transform: translateY(-2px);
    }
  }
  
  &:last-child {
    background: var(--background);
    color: var(--text);
    border: 1px solid var(--border);
    
    &:hover {
      background: var(--background-light);
      transform: translateY(-2px);
    }
  }
`;

const SuccessMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  animation: ${popIn} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  svg {
    color: var(--success);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  min-width: 150px;
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #ff4500;
  }
`;

const Card = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
  border: 1px solid var(--border);
  transform: ${({ $deleting }) => $deleting ? 'scale(0.98)' : 'scale(1)'};
  opacity: ${({ $deleting }) => $deleting ? 0.8 : 1};
  
  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const RepostBadge = styled.div`
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  background: linear-gradient(45deg, var(--primary), var(--primary-hover));
  color: var(--card-bg);
  padding: 0.375rem 0.75rem;
  border-radius: 1.25rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.3);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  animation: ${floating} 3s ease-in-out infinite;
  
  svg {
    margin-right: 0.25rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--background);
  position: relative;
  border-bottom: 1px solid var(--border-light);
`;

const Avatar = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  object-fit: cover;
  border: 3px solid var(--primary);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.8), transparent);
    transform: rotate(45deg);
    animation: ${gradientBackground} 3s infinite linear;
  }
  
  &:hover {
    transform: rotate(15deg) scale(1.1);
    border-color: var(--primary-hover);
  }
`;

const Username = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s;
  }
  
  &:hover {
    color: var(--primary);
    
    &::after {
      width: 100%;
    }
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
`;


const ResponsiveVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  z-index: 1;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.03);
    filter: saturate(1.2) brightness(1.05);
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  background: #000;
  touch-action: pan-y;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background: rgba(var(--primary-rgb), 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: var(--transition);
  backdrop-filter: blur(2px);
  box-shadow: var(--shadow);
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0.9375rem solid transparent;
    border-bottom: 0.9375rem solid transparent;
    border-left: 1.5625rem solid var(--card-bg);
    margin-left: 0.3125rem;
  }
  
  &:hover {
    background: rgba(var(--primary-rgb), 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 0.625rem;
  display: flex;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transition: var(--transition);
  
  &:hover {
    opacity: 1;
    animation: ${fadeIn} 0.3s forwards;
  }
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: var(--card-bg);
  font-size: 1.2rem;
  margin: 0 0.3125rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: scale(1.2);
  }
`;

const ProgressBar = styled.div`
  flex-grow: 1;
  height: 0.25rem;
  background: rgba(255,255,255,0.3);
  border-radius: 0.125rem;
  margin: 0 0.625rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.$progress || '0%'};
  background: var(--primary);
  border-radius: 0.125rem;
`;

const TimeDisplay = styled.span`
  color: var(--card-bg);
  font-size: 0.8rem;
  min-width: 5rem;
  text-align: center;
`;

const Caption = styled.p`
  padding: 1rem;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text);
  background: var(--card-bg);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.25rem;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--primary-hover));
  }
`;

const Tags = styled.div`
  padding: 0 1rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: var(--card-bg);
`;

const Tag = styled.span`
  color: var(--card-bg);
  font-size: 0.85rem;
  background: linear-gradient(45deg, var(--primary), var(--primary-hover));
  padding: 0.375rem 0.75rem;
  border-radius: 1.25rem;
  transition: var(--transition);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
  }
`;

const Actions = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border-light);
  background: var(--card-bg);
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => props.$active ? props.$color || 'var(--primary)' : 'var(--text-light)'};
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  svg {
    margin-right: 0.375rem;
    font-size: 1.2rem;
    transition: var(--transition);
  }

  &:hover {
    background: rgba(var(--primary-rgb), 0.05);
    color: ${props => props.$color || 'var(--primary)'};
    transform: translateY(-2px);
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 120%;
    height: 120%;
  }
  
  &:active {
    transform: scale(0.95) translateY(-2px);
  }
`;

const RepostButton = styled(ActionButton)`
  color: ${props => props.$active ? 'var(--success)' : 'var(--text-light)'};
  
  &:hover {
    color: var(--success);
  }
`;

const ReactionAnimation = styled.div`
  position: absolute;
  animation: ${popIn} 0.5s forwards, ${pulse} 0.5s 0.5s forwards;
  font-size: 2.5rem;
  opacity: 0;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
`;

const MemeCard = ({ meme, isRepost = false, onDelete, onCommentCountChange, isSquareView = false }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(meme.likes?.length || 0);
  const [showComments, setShowComments] = useState(false);
  const commentCount = meme.commentCount || 0;
  const [reaction, setReaction] = useState(null);
  const [isReposted, setIsReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(meme.repostCount || 0);
  const [isCheckingRepost, setIsCheckingRepost] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [deletionProgress, setDeletionProgress] = useState(0);
  const [mentionMap, setMentionMap] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const commentSectionRef = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const processMentions = async () => {
      if (meme.caption) {
        try {
          const result = await extractMentions(meme.caption);
          setMentionMap(result.mentionMap || {});
        } catch (error) {
          console.error('Error processing mentions:', error);
          setMentionMap({});
        }
      }
    };
    
    processMentions();

    if (user && meme.likes) {
      setIsLiked(meme.likes.some(like => like.toString() === user._id));
    }
    setLikeCount(meme.likes?.length || 0);
    setRepostCount(meme.repostCount || 0);
    
    if (user) {
      checkIfReposted();
    } else {
      setIsCheckingRepost(false);
    }
  }, [meme, user]);

  const handleDelete = async () => {
    setShowConfirmDialog(false);
    setIsDeleting(true);
    
    try {
      const interval = setInterval(() => {
        setDeletionProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      const token = localStorage.getItem('token');
      const response = await api.delete(`/memes/${meme._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      clearInterval(interval);
      setDeletionProgress(100);

      if (!response.data?.success) {
        throw new Error(response.data?.message || 'Falha ao deletar');
      }

      setShowSuccess(true);
      setTimeout(() => {
        if (onDelete) onDelete(meme._id); 
        setShowSuccess(false);
      }, 1500);

    } catch (err) {
      console.error('Erro ao deletar meme:', err);
      
      if (err.response?.status === 410) {
        if (onDelete) onDelete(meme._id);
        alert('Este meme já foi deletado anteriormente');
      } else {
        alert(err.response?.data?.message || 'Erro ao deletar meme');
      }
    } finally {
      setIsDeleting(false);
      setDeletionProgress(0);
    }
  };

  const openDeleteConfirmation = () => {
    setShowOptions(false);
    setShowConfirmDialog(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.target.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const checkIfReposted = async () => {
    try {
      if (meme.originalMeme && meme.author._id === user._id) {
        setIsReposted(true);
      } else {
        setIsReposted(meme.reposts?.some(repost => repost.toString() === user._id));
      }
    } catch (error) {
      console.error('Erro ao verificar repost:', error);
    } finally {
      setIsCheckingRepost(false);
    }
  };

  const handleLike = async () => {
    if (!user) return;
    
    try {
      const response = await api.post(`/memes/${meme._id}/like`);
      setIsLiked(response.data.isLiked);
      setLikeCount(response.data.likeCount);
      setReaction(response.data.isLiked ? 'like' : 'dislike');
      setTimeout(() => setReaction(null), 1500);
    } catch (error) {
      console.error('Erro ao curtir:', error);
    }
  };

  const handleDislike = async () => {
    if (!user || !isLiked) return;
    
    try {
      const response = await api.post(`/memes/${meme._id}/like`);
      setIsLiked(false);
      setLikeCount(response.data.likeCount);
      setReaction('dislike');
      setTimeout(() => setReaction(null), 1500);
    } catch (error) {
      console.error('Erro ao remover curtida:', error);
    }
  };

  const handleRepost = async () => {
    if (!user) return;
    
    if (meme.author?._id === user._id) {
      setReaction('self-repost');
      setTimeout(() => setReaction(null), 1500);
      return;
    }
    
    if (isReposted || isRepost) return;

    try {
      const response = await api.post(`/memes/${meme._id}/repost`);
      setIsReposted(true);
      setRepostCount(response.data.repostCount);
      
      setReaction('repost');
      setTimeout(() => setReaction(null), 1500);
    } catch (error) {
      console.error('Erro ao repostar:', error);
      if (error.response && error.response.status === 409) {
        setIsReposted(true);
      }
    }
  };

  const handleCommentSubmit = async (formData) => {
    try {
      const response = await api.post(
        `/memes/${meme._id}/comments`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
  
      const updatedMeme = await api.get(`/memes/${meme._id}`);
      const commentCount = meme.commentCount || 0;
      
      return response.data;
    } catch (error) {
      console.error('Erro detalhado:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: error.config
      });
  
      throw new Error(error.response?.data?.message || error.message || 'Erro ao enviar comentário');
    }
  };

  const buildUrl = (url) => {
    if (!url) {
      console.warn('URL is empty or undefined');
      return 'https://i.pravatar.cc/150?img=3';
    }
  
    if (url.startsWith('http://')) {
      url = 'https://' + url.substring(7);
    }
    
    if (url.startsWith('https://') || url.startsWith('blob:')) {
      return url;
    }
  
    const normalizedPath = url.startsWith('/') ? url : `/${url}`;
    const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
    const fullUrl = `${apiUrl}${normalizedPath}`;
    
    return fullUrl;
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!touchStartY.current) return;
    
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchStartY.current;
    
    // Se o usuário estiver arrastando para baixo com força suficiente
    if (deltaY > 50) {
      setShowComments(false);
      touchStartY.current = null;
    }
  };

  const handleTouchEnd = (e) => {
    if(!touchStartY.current) return;
    
    const touchY = e.changedTouches[0].clientY;
    const deltaY = touchY - touchStartY.current;
    
    if(Math.abs(deltaY) > 50) {
      if(deltaY > 0 && onScroll) onScroll('up');
      if(deltaY < 0 && onScroll) onScroll('down');
    }
  };



  return (
    <>
      <Card $deleting={isDeleting} style={isSquareView ? {
        width: '100%',
        height: '100%',
        margin: 0,
        borderRadius: 0,
        border: 'none',
        boxShadow: 'none',
        
        // Esconde elementos não essenciais na visualização quadrada
        '& > header, & > p, & > div:not(:first-child)': {
          display: 'none'
        },
        
        // Estilo específico para o container de mídia
        [MediaContainer]: {
          height: '100%',
          minHeight: 'auto',
          borderRadius: 0
        },
        
        // Ajusta a imagem/vídeo para preencher o quadrado
        [ResponsiveImage]: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 0,
          transform: 'none',
          filter: 'none'
        },
        
        [ResponsiveVideo]: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 0
        }
      } : {}}>
        {isDeleting && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '80%',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${deletionProgress}%`,
                height: '6px',
                background: 'var(--primary)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        )}
  
        {showSuccess && (
          <SuccessMessage>
            <FaCheck size={18} />
            <span>Meme deletado com sucesso!</span>
          </SuccessMessage>
        )}
  
        {user?._id === meme.author?._id && (
          <div style={{ position: 'relative' }}>
            <OptionsButton 
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(!showOptions);
              }}
            >
              <FaEllipsisH size={14} />
            </OptionsButton>
  
            {showOptions && (
              <OptionsMenu onClick={(e) => e.stopPropagation()}>
                <OptionItem onClick={openDeleteConfirmation}>
                  <FiTrash2 size={14} />
                  <span>Deletar</span>
                </OptionItem>
              </OptionsMenu>
            )}
          </div>
        )}
  
        {isRepost && (
          <RepostBadge>
            <FiRepeat /> Repostado por @{meme.repostedBy?.username || 'usuário'}
          </RepostBadge>
        )}
        
        {reaction && (
          <ReactionAnimation style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: reaction === 'like' ? 'var(--primary)' : 
                  reaction === 'dislike' ? '#f00' : 
                  reaction === 'repost' ? '#10b981' : 'var(--primary)'
          }}>
            {reaction === 'like' ? <FaSmile /> : 
             reaction === 'dislike' ? <FaAngry /> : 
             reaction === 'repost' ? <FaCheck /> : 
             <span style={{ fontSize: '1rem' }}>Você é o autor!</span>}
          </ReactionAnimation>
        )}
        
        <Header>
          <Avatar 
            src={
              meme.author?.profile?.avatar
                ? buildUrl(meme.author.profile.avatar)
                : 'https://i.pravatar.cc/150?img=3'
            }
            alt={meme.author?.username}
            onClick={() => meme.author && navigate(`/users/${meme.author._id}`)}
            crossOrigin="anonymous"
            onError={(e) => {
              e.target.src = 'https://i.pravatar.cc/150?img=3';
            }}
          />
          <Username 
            onClick={() => meme.author && navigate(`/users/${meme.author._id}`)}
          >
            @{meme.author?.username || 'usuário desconhecido'}
          </Username>
        </Header>
        
        <MediaContainer 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          >
          {meme.mediaType === 'image' ? (
            <ResponsiveImage 
              src={buildUrl(meme.mediaUrl)}
              alt={meme.caption || 'Meme image'}
              style={{
                transform: showComments ? 'scale(0.98)' : 'scale(1)',
                filter: showComments ? 'brightness(0.95)' : 'none'
              }}
              crossOrigin="anonymous"
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x400?text=Imagem+não+carregada';
                e.target.onerror = null;
              }}
            />
          ) : (
            <VideoContainer onClick={togglePlay}>
              <ResponsiveVideo
                ref={videoRef}
                src={buildUrl(meme.mediaUrl)}
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                crossOrigin="anonymous"
              />
              
              {!isPlaying && (
                <PlayButton onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }} />
              )}
              
              <VideoControls onClick={(e) => e.stopPropagation()}>
                <ControlButton onClick={togglePlay}>
                  {isPlaying ? '❚❚' : '▶'}
                </ControlButton>
                <ProgressBar onClick={handleSeek}>
                  <Progress $progress={`${progress}%`} />
                </ProgressBar>
                <TimeDisplay>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </TimeDisplay>
                <ControlButton onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                  }
                }}>
                  {videoRef.current?.muted ? '🔇' : '🔈'}
                </ControlButton>
              </VideoControls>
              
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, 
                  rgba(255,255,255,0.1), 
                  rgba(255,69,0,0.05))`,
                pointerEvents: 'none'
              }}/>
            </VideoContainer>
          )}
        </MediaContainer>
  
        {meme.caption && (
          <Caption>
            {React.Children.toArray(renderMentions(meme.caption, mentionMap, navigate))}
          </Caption>
        )}
        
        {meme.tags?.length > 0 && (
          <Tags>
            {meme.tags.map(tag => (
              <Tag key={tag} onClick={() => navigate(`/explore?tag=${tag}`)}>#{tag}</Tag>
            ))}
          </Tags>
        )}
  
        <Actions>
          <ActionGroup>
            <ActionButton 
              onClick={handleLike} 
              $active={isLiked}
              $color="var(--primary)"
            >
              <FaSmile /> {likeCount}
            </ActionButton>
            <ActionButton 
              onClick={handleDislike} 
              $active={!isLiked && likeCount > 0}
              $color="var(--text)"
            >
              <FaAngry /> 
            </ActionButton>
            <ActionButton 
              onClick={toggleComments}
              $active={showComments}
              $color="#f000"
            >
              <FiMessageSquare /> {commentCount}
            </ActionButton>
          </ActionGroup>
          
          <ActionGroup>
            <RepostButton 
              onClick={handleRepost}
              $active={isReposted}
              disabled={isReposted || isCheckingRepost || isRepost || (meme.author?._id === user?._id)}
              title={meme.author?._id === user?._id ? "Você não pode repostar seu próprio conteúdo" : ""}
            >
              {isCheckingRepost ? (
                <FiRepeat />
              ) : isReposted ? (
                <FaCheck />
              ) : (
                <FiRepeat />
              )} {repostCount}
            </RepostButton>
            <ActionButton>
              <FiShare2 />
            </ActionButton>
          </ActionGroup>
        </Actions>
      </Card>
  
      {/* Seção de comentários mobile */}
      {showComments && (
        <MobileCommentSection
          $isOpen={showComments}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <CloseCommentsButton onClick={toggleComments}>
            <FiChevronDown size={24} />
          </CloseCommentsButton>
          <CommentSectionContainer ref={commentSectionRef}>
            <CommentSection 
              memeId={meme._id}
              onCommentSubmit={handleCommentSubmit}
              onCommentCountChange={onCommentCountChange} 
            />
          </CommentSectionContainer>
        </MobileCommentSection>
      )}
  
      {showConfirmDialog && (
        <ConfirmationDialog>
          <DialogContent>
            <DialogTitle>Tem certeza que deseja deletar este meme?</DialogTitle>
            <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
              Esta ação é irreversível e removerá o meme permanentemente.
            </p>
            <DialogButtons>
              <DialogButton onClick={handleDelete}>
                <FiCheck size={16} />
                Confirmar
              </DialogButton>
              <DialogButton onClick={() => setShowConfirmDialog(false)}>
                <FiX size={16} />
                Cancelar
              </DialogButton>
            </DialogButtons>
          </DialogContent>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default MemeCard;