import React, { useEffect, useState } from 'react';
import { discoveryService } from '../services/api';
import * as S from './Home.styles';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../core/Layout';

interface Instituicao {
  id: number;
  nome: string;
  localizacao?: string;
}

interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  imagem?: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [instituicoes, setInstituicoes] = useState<Instituicao[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resInst, resEventos] = await Promise.all([
          discoveryService.getInstituicoes(),
          discoveryService.getProximosEventos()
        ]);
        setInstituicoes(resInst.data);
        setEventos(resEventos.data);
      } catch (err) {
        setInstituicoes([
          { id: 1, nome: "UFAM", localizacao: "Instituto de Ciências Sociais, Educação e Zootecnia" },
          { id: 2, nome: "UEA", localizacao: "Centro de Estudos Superiores de Parintins" },
          { id: 3, nome: "IFAM", localizacao: "Campus Parintins" }
        ]);
        setEventos([
          { 
            id: 1, 
            titulo: "Feira de Ciências e Tecnologia", 
            descricao: "Venha prestigiar os projetos inovadores desenvolvidos pelos alunos do campus neste semestre letivo.",
            imagem: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400"
          },
          { 
            id: 2, 
            titulo: "Palestra: Carreira em TI", 
            descricao: "Profissionais do mercado compartilham experiências sobre o futuro do development de software e IA.",
            imagem: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
          },
          { 
            id: 3, 
            titulo: "Workshop de UI/UX Design", 
            descricao: "Aprenda na prática os fundamentos para construir interfaces atraentes, eficientes e focadas no usuário.",
            imagem: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        height: '100vh', fontFamily: 'Inter', fontWeight: 600, fontSize: '15px' 
      }}>
        Carregando dados da UniLink...
      </div>
    );
  }

  return (
    <Layout>
      <S.Header>
        <S.HeaderLeft />
        <S.HeaderRight>
          <S.NavLinks>
            <a href="#noticias">Notícias</a>
            <a href="#eventos">Eventos</a>
            <a onClick={() => navigate('/campus')} style={{ cursor: 'pointer' }}>Campi</a>
            <a href="#comunidade">Comunidade</a>
          </S.NavLinks>
        </S.HeaderRight>
      </S.Header>
      <S.ContentArea>
        <S.Banner>
          <S.BannerLeft>
            <S.BadgeWelcome>BEM-VINDO!</S.BadgeWelcome>
            <S.BannerTitle>Conectando a comunidade</S.BannerTitle>
            <S.BannerSubtitle>
              Descubra o que acontece em Parintins e acompanhe de perto os eventos integrados dos seus campi universitários.
            </S.BannerSubtitle>
            <S.BannerButtons>
              <S.BannerButton variant="dark" onClick={() => navigate('/explorar')}>Explorar agora</S.BannerButton>
              <S.BannerButton variant="light">Saiba mais</S.BannerButton>
            </S.BannerButtons>
          </S.BannerLeft>
        </S.Banner>
        <S.Section id="noticias">
          <S.SectionHeader>
            <S.SectionTitle>Notícias Recentes</S.SectionTitle>
            <S.RoundBlackButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </S.RoundBlackButton>
          </S.SectionHeader>
          <S.GridNoticias>
            <S.NewsCard>
              <S.NewsImageWrapper>
                <S.NewsImage src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300" alt="Notícia 1" />
                <S.NewsBadge>NOVO</S.NewsBadge>
              </S.NewsImageWrapper>
              <S.NewsTitle>Inscrições abertas para o programa de monitoria</S.NewsTitle>
              <S.NewsDescription>A UFAM divulgou o edital para o novo semestre acadêmico. Participe e colabore!</S.NewsDescription>
              <S.NewsButton>VER MAIS</S.NewsButton>
            </S.NewsCard>
            <S.NewsCard>
              <S.NewsImageWrapper>
                <S.NewsImage src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=300" alt="Notícia 2" />
                <S.NewsBadge dark>DESTAQUE</S.NewsBadge>
              </S.NewsImageWrapper>
              <S.NewsTitle>Laboratório recebe novos equipamentos modernos</S.NewsTitle>
              <S.NewsDescription>Investimentos recentes trazem computadores de ponta para pesquisa prática dos estudantes.</S.NewsDescription>
              <S.NewsButton>VER MAIS</S.NewsButton>
            </S.NewsCard>
            <S.NewsCard>
              <S.NewsImageWrapper>
                <S.NewsImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300" alt="Notícia 3" />
              </S.NewsImageWrapper>
              <S.NewsTitle>Vagas abertas para novos projetos de Extensão</S.NewsTitle>
              <S.NewsDescription>Desenvolva suas habilidades práticas auxiliando e atuando junto à comunidade externa local.</S.NewsDescription>
              <S.NewsButton>VER MAIS</S.NewsButton>
            </S.NewsCard>
            <S.NewsCard>
              <S.NewsImageWrapper>
                <S.NewsImage src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300" alt="Notícia 4" />
              </S.NewsImageWrapper>
              <S.NewsTitle>Biblioteca setorial atualiza o acervo físico</S.NewsTitle>
              <S.NewsDescription>Dezenas de novos livros técnicos das áreas de engenharia, saúde e educação disponíveis.</S.NewsDescription>
              <S.NewsButton>VER MAIS</S.NewsButton>
            </S.NewsCard>
          </S.GridNoticias>
        </S.Section>
        <S.Section id="eventos">
          <S.SectionHeader>
            <S.SectionTitle>Próximos Eventos</S.SectionTitle>
            <S.RoundBlackButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </S.RoundBlackButton>
          </S.SectionHeader>
          <S.GridEventos>
            {eventos.slice(0, 3).map((evento, index) => {
              const bgType = index === 0 ? 'green' : index === 1 ? 'dark' : undefined;
              const isDark = index === 1;
              return (
                <S.EventCard key={evento.id} bgType={bgType}>
                  <S.NewsImageWrapper>
                    <S.NewsImage 
                      src={evento.imagem || "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400"} 
                      alt={evento.titulo} 
                    />
                    {index === 0 && <S.NewsBadge dark>DESTAQUE</S.NewsBadge>}
                    {index === 1 && <S.NewsBadge>NOVO</S.NewsBadge>}
                  </S.NewsImageWrapper>
                  <S.EventTitle>{evento.titulo}</S.EventTitle>
                  <S.EventDescription isDark={isDark}>{evento.descricao}</S.EventDescription>
                  <S.EventButton bgType={bgType}>VER DETALHES</S.EventButton>
                </S.EventCard>
              );
            })}
          </S.GridEventos>
        </S.Section>
        <S.Section id="campi">
          <S.SectionHeader>
            <S.SectionTitle>Navegue por Campi</S.SectionTitle>
            <S.RoundBlackButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </S.RoundBlackButton>
          </S.SectionHeader>
          <S.GridCampi>
            {instituicoes.slice(0, 3).map((inst) => (
              <S.CampusItem 
                onClick={() => navigate('/campus')} 
                style={{ cursor: 'pointer' }}
                key={inst.id}
              >
                <S.CampusIconContainer>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="16" />
                    <line x1="15" y1="22" x2="15" y2="16" />
                    <line x1="12" y1="16" x2="12" y2="22" />
                  </svg>
                </S.CampusIconContainer>
                
                <S.CampusInfo>
                  <S.CampusName>{inst.nome}</S.CampusName>
                  <S.CampusSub>{inst.localizacao || 'Campus Universitário Integrado'}</S.CampusSub>
                </S.CampusInfo>
                <S.RoundBlackButton style={{ width: 32, height: 32 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </S.RoundBlackButton>
              </S.CampusItem>
            ))}
          </S.GridCampi>
        </S.Section>
      </S.ContentArea>
    </Layout>
  );
}