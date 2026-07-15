import axios from 'axios';
import type { AxiosResponse } from 'axios';

// Interface mapeando as propriedades que aparecem no seu card do Explorar e Home
export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  imagem?: string;
  tipo?: string;             // Ex: "COMPETIÇÃO", "EVENTO", "PROJETO"
  badgeBg?: string;          // Cor de fundo do badge
  badgeTextColor?: string;   // Cor do texto do badge
  data?: string;             // Ex: "25 Nov"
  local?: string;            // Ex: "IFAM - Campus Parintins"
  views?: number;
  comments?: number;
  categoria?: 'Eventos' | 'Notícias' | 'Projetos';
}

export interface Instituicao {
  id: number;
  nome: string;
  localizacao?: string;      // Ex: "Instituto de Ciências Sociais, Educação e Zootecnia"
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Endereço da sua API Spring Boot local
});

export const discoveryService = {
  getInstituicoes: (): Promise<AxiosResponse<Instituicao[]>> => {
    return api.get<Instituicao[]>('/instituicoes');
  },
  
  getProximosEventos: (): Promise<AxiosResponse<Evento[]>> => {
    return api.get<Evento[]>('/eventos');
  }
};