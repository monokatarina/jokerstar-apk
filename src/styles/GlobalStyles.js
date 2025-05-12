import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Cores base que não mudam com o tema */
    --danger: #ff4444;
    --danger-hover: #cc0000;
    --success: #00C851;
    --background-light: #f8f9fa;
    --like-color: #FF9500;
    --like-rgb: 255, 149, 0;
    --dislike-color: #FF3B30;
    --dislike-rgb: 255, 59, 48;
    --background-light: #f9f9f9;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
    --text-inverse: #fff;
    --radius-lg: 24px;
    --success: #10b981;
    --success-hover: #059669;
    --primary-rgb: 255, 69, 0;
    --primary: #FF4500;       
    --primary-hover: #e03d00;
    --secondary: #1DA1F2;
    --secondary-hover: #0D91E2;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
    --comment-bg: #fff;
    --comment-bg-dark: #2a2a2a;
    --reply-bg: #f5f5f5;
    --reply-bg-dark: #333;
    --input-bg: #fff;
    --input-bg-dark: #383838;
    --input-text: #333;
    --input-text-dark: #eee;
  }

  /* Tema escuro (agora padrão) */
  [data-theme="dark"] {
    --comment-bg: var(--comment-bg-dark);
    --reply-bg: var(--reply-bg-dark);
    --input-bg: var(--input-bg-dark);
    --input-text: var(--input-text-dark);
    --background: #121212;
    --card-bg: #1E1E1E;
    --text: #FFFFFF;
    --text-light: #CCCCCC;
    --text-lighter: #999999;
    --border: #333333;
    --border-light: #444444;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  /* Tema claro */
  [data-theme="light"] {
    --background: #FAFAFA;
    --card-bg: #FFFFFF;
    --text: #333333;
    --text-light: #666666;
    --text-lighter: #999999;
    --border: #E1E1E1;
    --border-light: #F0F0F0;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 4px 15px rgba(0, 0, 0, 0.12);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Tipografia */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-hover);
      text-decoration: underline;
    }
  }

  /* Componentes globais */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Estilos para menções */
  .mention {
    color: var(--primary);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    padding: 0 2px;
    border-radius: 3px;
    background: rgba(255, 69, 0, 0.1);
    
    &:hover {
      background: rgba(255, 69, 0, 0.2);
      text-decoration: none;
    }
  }

  /* Spinner animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    vertical-align: middle;
    margin-right: 8px;
  }

  /* Estilos para o dropdown de sugestões de menções */
  .mention-suggestions {
    position: absolute;
    z-index: 1000;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow);
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
    margin-top: 5px;
  }

  .mention-suggestion {
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);

    &:hover {
      background: rgba(255, 69, 0, 0.1);
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  /* Estilo para o textarea com menções */
  .mention-textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    background: var(--input-bg);
    color: var(--text);
    resize: vertical;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.2);
    }
  }


  /* Botões */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    gap: 8px;
    
    &-primary {
      background: var(--primary);
      color: white;
      
      &:hover {
        background: var(--primary-hover);
        transform: translateY(-1px);
        box-shadow: var(--shadow-hover);
      }
    }
    
    &-secondary {
      background: var(--secondary);
      color: white;
      
      &:hover {
        background: var(--secondary-hover);
      }
    }
    
    &-outline {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);
      
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    }
    
    &-icon {
      padding: 8px;
      border-radius: 50%;
    }
  }

  /* Cards */
  .card {
    background: var(--card-bg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      box-shadow: var(--shadow-hover);
    }
  }

  /* Feed específico */
  .feed-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  /* MemeCard aprimorado */
  .meme-card {
    background: var(--card-bg);
    border-radius: var(--radius-md);
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
    }
  }

  .meme-header {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    
    img {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--border-light);
    }
    
    .user-info {
      flex: 1;
      
      .username {
        font-weight: 600;
        color: var(--text);
        display: block;
        
        &:hover {
          color: var(--primary);
        }
      }
      
      .timestamp {
        font-size: 13px;
        color: var(--text-lighter);
      }
    }
    
    .menu-btn {
      color: var(--text-light);
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .meme-content {
    img, video {
      width: 100%;
      max-height: 600px;
      object-fit: contain;
      display: block;
      background: #f5f5f5;
    }
    
    .caption {
      padding: 12px 16px;
      font-size: 15px;
      line-height: 1.4;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0 16px 12px;
      
      .tag {
        color: var(--primary);
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .meme-actions {
    display: flex;
    padding: 8px 16px;
    border-top: 1px solid var(--border-light);
    
    .action-btn {
      background: none;
      border: none;
      margin-right: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: var(--text-light);
      transition: var(--transition);
      padding: 8px;
      border-radius: var(--radius-sm);
      
      &:hover {
        color: var(--primary);
        background: rgba(255, 69, 0, 0.1);
      }
      
      &.active {
        color: var(--primary);
      }
      
      svg {
        margin-right: 6px;
        font-size: 20px;
      }
    }
  }

  /* Estados */
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 20px;
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(255, 69, 0, 0.2);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  }

  .error-message {
    background: #FFEBEE;
    color: #C62828;
    padding: 16px;
    border-radius: var(--radius-sm);
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  /* Modal e overlays */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    :root {
      --radius-sm: 6px;
      --radius-md: 10px;
    }
    
    .meme-card {
      margin-bottom: 16px;
    }
    
    .upload-button {
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
    }
  }
  /* Mobile-specific styles */
  @media (max-width: 768px) {
    :root {
      --keyboard-height: 0px;
    }

    /* Prevent zoom on input focus in iOS */
    input, textarea, select {
      font-size: 16px !important;
    }

    /* Better touch handling */
    body {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      touch-action: manipulation;
      overscroll-behavior-y: contain;
    }

    /* Hide scrollbars but keep functionality */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* Safe area handling */
  @supports (padding: max(0px)) {
    body {
      padding-left: max(12px, env(safe-area-inset-left));
      padding-right: max(12px, env(safe-area-inset-right));
    }
  }
  `

;