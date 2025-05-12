import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jokesteronline.org/api',
  timeout: 60000
});

// Interceptor de requisição
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Interceptor de resposta
api.interceptors.response.use(
  response => {
    // Garante que a resposta tenha uma estrutura consistente
    if (!response.data) {
      console.warn('Empty response data', response);
      return { ...response, data: { data: [] } }; // Padroniza para array vazio
    }
    return response;
  },
  async error => {
    // Tratamento de erros 401 (Não autorizado)
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Evita redirecionamento duplo
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }

    // Padroniza a estrutura de erro
    const apiError = {
      message: error.response?.data?.message || 'Erro na requisição',
      status: error.response?.status || 500,
      data: error.response?.data || null,
    };

    return Promise.reject(apiError);
  }
);

// Função auxiliar para garantir que os dados sejam sempre um array
const ensureArrayData = (data) => {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.data)) return data.data;
  if (data && data.items && Array.isArray(data.items)) return data.items;
  return [];
};

// Adiciona métodos personalizados
api.getArray = async (url, config) => {
  const response = await api.get(url, config);
  return ensureArrayData(response.data);
};

export default api;
