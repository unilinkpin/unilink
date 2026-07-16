import { api } from '../../../core/api';

export interface ProjetoMock {
  id: number;
  nome: string;
  tema: 'dark' | 'light' | 'green';
}

export interface PerfilData {
  id: number;
  nome: string;
  tipoVinculo: string;
  instituicaoNome: string;
  fotoPerfilUrl: string;
  pontos: number;
  totalEventos: number;
  totalProjetos: number;
  projetosMockados: ProjetoMock[];
}

export const perfilService = {
  getPerfil: async (id: number): Promise<PerfilData> => {
    const response = await api.get<PerfilData>(`/perfil/${id}`);
    return response.data;
  }
};