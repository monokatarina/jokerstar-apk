// src/services/auth.js
import api from './api';

/**
 * Tipos de erros personalizados para autenticação
 */
const AuthErrorTypes = {
  CONFLICT: 'CONFLICT',           // Quando há conflito (usuário/email já existe)
  AUTH_ERROR: 'AUTH_ERROR',       // Erros de autenticação (credenciais inválidas)
  SESSION_EXPIRED: 'SESSION_EXPIRED', // Sessão expirada
  NETWORK_ERROR: 'NETWORK_ERROR', // Problemas de conexão
  VALIDATION_ERROR: 'VALIDATION_ERROR', // Erros de validação
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'  // Erros não identificados
};

/**
 * Registra um novo usuário
 * @param {Object} userData - Dados do usuário para registro
 * @returns {Promise<Object>} Dados do usuário registrado
 * @throws {Object} Erro personalizado
 */
export const register = async (userData) => {
  try {
    const { data } = await api.post('/auth/register', userData);
    
    // Armazena o token se vier na resposta
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    
    return data;
  } catch (error) {
    console.error('[Auth Service] Register Error:', error);
    
    // Tratamento específico para cada tipo de erro
    if (error.response) {
      switch (error.response.status) {
        case 400:
          throw {
            type: AuthErrorTypes.VALIDATION_ERROR,
            message: 'Dados inválidos',
            details: error.response.data.errors
          };
        case 409:
          throw {
            type: AuthErrorTypes.CONFLICT,
            message: error.response.data.message || 'Conflito no registro',
            conflicts: error.response.data.conflicts
          };
        default:
          throw {
            type: AuthErrorTypes.UNKNOWN_ERROR,
            message: error.response.data?.message || 'Erro ao registrar usuário'
          };
      }
    } else if (error.request) {
      throw {
        type: AuthErrorTypes.NETWORK_ERROR,
        message: 'Sem resposta do servidor'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: 'Erro desconhecido ao registrar'
      };
    }
  }
};

/**
 * Realiza o login do usuário
 * @param {Object} credentials - Credenciais de login (email/username e senha)
 * @returns {Promise<Object>} Dados do usuário e token
 * @throws {Object} Erro personalizado
 */
export const login = async (credentials) => {
  try {
    const { data } = await api.post('/auth/login', credentials);
    
    // Armazena o token
    localStorage.setItem('token', data.token);
    
    return data;
  } catch (error) {
    console.error('[Auth Service] Login Error:', error);
    
    if (error.response) {
      switch (error.response.status) {
        case 400:
          throw {
            type: AuthErrorTypes.VALIDATION_ERROR,
            message: 'Credenciais inválidas',
            details: error.response.data.errors
          };
        case 401:
          throw {
            type: AuthErrorTypes.AUTH_ERROR,
            message: error.response.data?.message || 'Credenciais inválidas'
          };
        case 403:
          throw {
            type: AuthErrorTypes.AUTH_ERROR,
            message: error.response.data?.message || 'Conta desativada ou bloqueada'
          };
        default:
          throw {
            type: AuthErrorTypes.UNKNOWN_ERROR,
            message: error.response.data?.message || 'Erro ao fazer login'
          };
      }
    } else if (error.request) {
      throw {
        type: AuthErrorTypes.NETWORK_ERROR,
        message: 'Sem resposta do servidor'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: 'Erro desconhecido ao fazer login'
      };
    }
  }
};

/**
 * Verifica a autenticação do usuário
 * @returns {Promise<Object>} Dados do usuário autenticado
 * @throws {Object} Erro personalizado
 */
export const checkAuth = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw {
        type: AuthErrorTypes.AUTH_ERROR,
        message: 'Nenhum token encontrado'
      };
    }
    
    const { data } = await api.get('/auth/check', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return data;
  } catch (error) {
    console.error('[Auth Service] Check Auth Error:', error);
    
    // Remove o token se for inválido
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      throw {
        type: AuthErrorTypes.SESSION_EXPIRED,
        message: 'Sessão expirada'
      };
    }
    
    if (error.response) {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: error.response.data?.message || 'Erro ao verificar autenticação'
      };
    } else if (error.request) {
      throw {
        type: AuthErrorTypes.NETWORK_ERROR,
        message: 'Sem resposta do servidor'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: error.message || 'Erro desconhecido ao verificar autenticação'
      };
    }
  }
};

/**
 * Realiza o logout do usuário
 * @returns {Promise<Object>} Resultado do logout
 * @throws {Object} Erro personalizado
 */
export const logout = async () => {
  try {
    // Tenta fazer logout no servidor
    await api.post('/auth/logout');
    
    // Remove os dados locais independente do resultado
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    return { success: true };
  } catch (error) {
    console.error('[Auth Service] Logout Error:', error);
    
    // Mesmo com erro, remove os dados locais
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    if (error.response) {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: error.response.data?.message || 'Erro ao fazer logout'
      };
    } else if (error.request) {
      throw {
        type: AuthErrorTypes.NETWORK_ERROR,
        message: 'Sem resposta do servidor'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: 'Erro desconhecido ao fazer logout'
      };
    }
  }
};

/**
 * Solicita redefinição de senha
 * @param {string} email - Email do usuário
 * @returns {Promise<Object>} Resultado da solicitação
 * @throws {Object} Erro personalizado
 */
export const requestPasswordReset = async (email) => {
  try {
    const { data } = await api.post('/auth/request-password-reset', { email });
    return data;
  } catch (error) {
    console.error('[Auth Service] Password Reset Request Error:', error);
    
    if (error.response) {
      throw {
        type: error.response.status === 404 
          ? AuthErrorTypes.AUTH_ERROR 
          : AuthErrorTypes.UNKNOWN_ERROR,
        message: error.response.data?.message || 'Erro ao solicitar redefinição de senha'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: 'Erro desconhecido ao solicitar redefinição de senha'
      };
    }
  }
};

/**
 * Redefine a senha do usuário
 * @param {string} token - Token de redefinição
 * @param {string} newPassword - Nova senha
 * @returns {Promise<Object>} Resultado da redefinição
 * @throws {Object} Erro personalizado
 */
export const resetPassword = async (token, newPassword) => {
  try {
    const { data } = await api.post('/auth/reset-password', { token, newPassword });
    return data;
  } catch (error) {
    console.error('[Auth Service] Password Reset Error:', error);
    
    if (error.response) {
      throw {
        type: error.response.status === 400 || error.response.status === 401
          ? AuthErrorTypes.AUTH_ERROR 
          : AuthErrorTypes.UNKNOWN_ERROR,
        message: error.response.data?.message || 'Erro ao redefinir senha'
      };
    } else {
      throw {
        type: AuthErrorTypes.UNKNOWN_ERROR,
        message: 'Erro desconhecido ao redefinir senha'
      };
    }
  }
};

export default {
  register,
  login,
  checkAuth,
  logout,
  requestPasswordReset,
  resetPassword,
  AuthErrorTypes // Exporta os tipos de erro para uso externo
};