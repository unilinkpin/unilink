import React, { useEffect, useState } from 'react';
import { discoveryService } from '../services/api';
import * as S from './Home.styles';
import logoImg from '../../../assets/logo.png'; 

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
        console.error("Erro ao sincronizar com a API local, usando dados de fallback:", err);
        
        // MOCK DE BACKUP: Evita que o app quebre ou fique em loop infinito se o banco der erro 500
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
            descricao: "Profissionais do mercado compartilham experiências sobre o futuro do desenvolvimento de software e IA.",
            imagem: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
          },
          { 
            id: 3, 
            titulo: "Workshop de UI/UX Design", 
            descricao: "Aprenda na prática os fundamentos para construir interfaces atraentes, eficientes e focadas no usuário.",
            imagem: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=400"
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
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '15px'
      }}>
        Carregando dados da UniLink...
      </div>
    );
  }

  return (
    <S.LayoutContainer>
      
      {/* 1. SIDEBAR LATERAL ESQUERDA (ESTILO CÁPSULA DO FIGMA) */}
      <S.Sidebar>
        <S.SidebarItem active>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </S.SidebarItem>
        <S.SidebarItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </S.SidebarItem>
        <S.SidebarItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </S.SidebarItem>
        <S.SidebarItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </S.SidebarItem>
      </S.Sidebar>

      {/* 2. ÁREA DE CONTEÚDO PRINCIPAL (DIREITA DA SIDEBAR) */}
      <S.MainWrapper>
        
        {/* HEADER SUPERIOR */}
        <S.Header>
          <S.HeaderLeft>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img style={{ width: 32, height: 32, borderRadius: '50%' }} src={logoImg} alt="Logo" />
              <S.LogoTitle>UniLink</S.LogoTitle>
            </div>
          </S.HeaderLeft>

          <S.HeaderRight>
            {/* Barra de Pesquisa Integrada */}
            <S.SearchBar>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F7F7F" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Buscar no UniLink..." />
            </S.SearchBar>

            {/* Menu de Navegação Superior */}
            <S.NavLinks>
              <a href="#noticias">Notícias</a>
              <a href="#eventos">Eventos</a>
              <a href="#campi">Campi</a>
              <a href="#comunidade">Comunidade</a>
            </S.NavLinks>

            {/* Botão de Autenticação */}
            <S.ButtonEntrar>Entrar</S.ButtonEntrar>
          </S.HeaderRight>
        </S.Header>

        {/* CONTEÚDO DA PÁGINA */}
        <S.ContentArea>
          
          {/* BANNER DE BOAS-VINDAS */}
          <S.Banner>
            <S.BannerLeft>
              <S.BadgeWelcome>BEM-VINDO!</S.BadgeWelcome>
              <S.BannerTitle>Conectando a comunidade</S.BannerTitle>
              <S.BannerSubtitle>
                Descubra o que acontece em Parintins e acompanhe de perto os eventos integrados dos seus campi universitários.
              </S.BannerSubtitle>
              <S.BannerButtons>
                <S.BannerButton variant="dark">Explorar agora</S.BannerButton>
                <S.BannerButton variant="light">Saiba mais</S.BannerButton>
              </S.BannerButtons>
            </S.BannerLeft>

            <S.BannerRight>
              <S.BannerImage 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400" 
                alt="Estudantes universitários colaborando" 
              />
            </S.BannerRight>
          </S.Banner>

          {/* SEÇÃO: NOTÍCIAS RECENTES */}
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
              {/* Notícia 1 */}
              <S.NewsCard>
                <S.NewsImageWrapper>
                  <S.NewsImage src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300" alt="Notícia 1" />
                  <S.NewsBadge>NOVO</S.NewsBadge>
                </S.NewsImageWrapper>
                <S.NewsTitle>Inscrições abertas para o programa de monitoria</S.NewsTitle>
                <S.NewsDescription>A UFAM divulgou o edital para o novo semestre acadêmico. Participe e colabore!</S.NewsDescription>
                <S.NewsButton>VER MAIS</S.NewsButton>
              </S.NewsCard>

              {/* Notícia 2 */}
              <S.NewsCard>
                <S.NewsImageWrapper>
                  <S.NewsImage src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=300" alt="Notícia 2" />
                  <S.NewsBadge dark>DESTAQUE</S.NewsBadge>
                </S.NewsImageWrapper>
                <S.NewsTitle>Laboratório recebe novos equipamentos modernos</S.NewsTitle>
                <S.NewsDescription>Investimentos recentes trazem computadores de ponta para pesquisa prática dos estudantes.</S.NewsDescription>
                <S.NewsButton>VER MAIS</S.NewsButton>
              </S.NewsCard>

              {/* Notícia 3 */}
              <S.NewsCard>
                <S.NewsImageWrapper>
                  <S.NewsImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300" alt="Notícia 3" />
                </S.NewsImageWrapper>
                <S.NewsTitle>Vagas abertas para novos projetos de Extensão</S.NewsTitle>
                <S.NewsDescription>Desenvolva suas habilidades práticas auxiliando e atuando junto à comunidade externa local.</S.NewsDescription>
                <S.NewsButton>VER MAIS</S.NewsButton>
              </S.NewsCard>

              {/* Notícia 4 */}
              <S.NewsCard>
                <S.NewsImageWrapper>
                  <S.NewsImage src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300" alt="Notícia 4" />
                </S.NewsImageWrapper>
                <S.NewsTitle>Biblioteca setorial atualiza o acervo físico</S.NewsTitle>
                <S.NewsDescription>Dezenas de novos livros técnicos das áreas de engenharia, saúde e educação já disponíveis.</S.NewsDescription>
                <S.NewsButton>VER MAIS</S.NewsButton>
              </S.NewsCard>
            </S.GridNoticias>
          </S.Section>

          {/* SEÇÃO: PRÓXIMOS EVENTOS */}
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
                // Alternância clássica de cores baseada na posição para bater com o design do Figma
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

          {/* SEÇÃO: NAVEGUE POR CAMPI */}
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
                <S.CampusItem key={inst.id}>
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
      </S.MainWrapper>
    </S.LayoutContainer>
  );
}