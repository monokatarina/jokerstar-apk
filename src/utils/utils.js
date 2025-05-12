// utils.js
export const buildUrl = (url) => {
  if (!url) {
    console.warn('URL is empty or undefined');
    return 'https://i.pravatar.cc/150?img=3'; // Fallback HTTPS
  }

  // Forçar HTTPS se for HTTP
  if (url.startsWith('http://')) {
    url = 'https://' + url.substring(7);
  }
  
  // Se já for HTTPS ou blob, retorna diretamente
  if (url.startsWith('https://') || url.startsWith('blob:')) {
    return url;
  }

  // Normalizar caminho (garantir que comece com /)
  const normalizedPath = url.startsWith('/') ? url : `/${url}`;
  
  // Usar API URL com HTTPS
  const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
  const fullUrl = `${apiUrl}${normalizedPath}`;
  
  return fullUrl;
};