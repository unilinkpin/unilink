import { api } from '../../core/api';

export const authService = {
  login: async (email: string, senha: string): Promise<any> => {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;
  },

  register: async (nomeCompleto: string, email: string, senha: string, tipoVinculo: string): Promise<string> => {
    const response = await api.post('/auth/register', {
      nomeCompleto,
      email,
      senha,
      tipoVinculo
    });
    return response.data;
  }
};