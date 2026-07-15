import React, { useState } from 'react';
import * as S from './Explorar.styles';
import { useNavigate } from 'react-router-dom';

interface FeedItem {
  id: number;
  tipo: string;
  badgeBg: string;
  badgeTextColor: string;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
  local: string;
  views: number;
  comments: number;
  categoria: 'Eventos' | 'Notícias' | 'Projetos' | 'Competições';
}

type CategoriaFiltro = 'Todos' | 'Eventos' | 'Notícias' | 'Projetos' | 'Competições';

export default function Explore() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoriaFiltro>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categorias: CategoriaFiltro[] = ['Todos', 'Eventos', 'Notícias', 'Projetos', 'Competições'];

  const [feedItems] = useState<FeedItem[]>([
    {
      id: 1,
      tipo: 'COMPETIÇÃO',
      badgeBg: '#A3D936',
      badgeTextColor: '#111111',
      titulo: '4ª Maratona de Programação IFAM',
      descricao: 'Desafie suas habilidades lógicas e de programação na 4ª Maratona da IFAM. Inscrições abertas para todos os cursos de exatas.',
      imagem: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400',
      data: '25 Nov',
      local: 'IFAM - Campus Parintins',
      views: 128,
      comments: 34,
      categoria: 'Competições'
    },
    {
      id: 2,
      tipo: 'EVENTO',
      badgeBg: '#4A90E2',
      badgeTextColor: '#FFFFFF',
      titulo: 'Novo Laboratório de Ciências é inaugurado no ICSEZ',
      descricao: 'Com novos equipamentos, o laboratório atenderá os cursos de biologia e química a partir do próximo semestre.',
      imagem: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400',
      data: 'Hoje, 09:30',
      local: 'UFAM - Campus Parintins',
      views: 256,
      comments: 45,
      categoria: 'Eventos'
    },
    {
      id: 3,
      tipo: 'PROJETO',
      badgeBg: '#9B51E0',
      badgeTextColor: '#FFFFFF',
      titulo: 'Carona Solidária Universitária',
      descricao: 'Alunos de computação desenvolvem sistema para facilitar a mobilidade de estudantes entre campus e cidade.',
      imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400',
      data: 'Em andamento',
      local: 'UFAM / UEA',
      views: 512,
      comments: 89,
      categoria: 'Projetos'
    }
  ]);

  const filteredFeed = feedItems.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.categoria === activeCategory;
    const matchesSearch = item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.descricao.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <S.LayoutContainer>
      
      {/* 1. SIDEBAR LATERAL (SÓ APARECE NO DESKTOP) */}
      <S.Sidebar>
        <S.SidebarItem onClick={() => navigate('/home')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </S.SidebarItem>
        <S.SidebarItem active onClick={() => navigate('/explorar')}>
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

      {/* 2. CONTEÚDO PRINCIPAL */}
      <S.MainWrapper>
        
        {/* Header Superior com Busca Integrada */}
        <S.HeaderWrapper>
          <S.HeaderLeftRow>
            <S.HeaderTitle>Explorar</S.HeaderTitle>
            
            <S.SearchBar>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7F7F7F" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input 
                type="text" 
                placeholder="Buscar eventos, notícias, projetos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </S.SearchBar>
          </S.HeaderLeftRow>

          <S.HeaderActions>
            <S.IconButton>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </S.IconButton>
            <S.IconButton>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </S.IconButton>
            <S.UserAvatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" alt="Perfil" />
          </S.HeaderActions>
        </S.HeaderWrapper>

        {/* Categorias Filtros */}
        <S.CategoriesContainer>
          {categorias.map((cat) => (
            <S.CategoryTab 
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </S.CategoryTab>
          ))}
        </S.CategoriesContainer>

        {/* Layout de duas colunas */}
        <S.ContentLayout>
          
          {/* Coluna 1: Feed de Cards */}
          <S.FeedColumn>
            {filteredFeed.length > 0 ? (
              <S.FeedGrid>
                {filteredFeed.map((item) => (
                  <S.ExploreCard key={item.id}>
                    <S.CardImageWrapper>
                      <S.CardImage src={item.imagem} alt={item.titulo} />
                      <S.CardBadge bg={item.badgeBg} color={item.badgeTextColor}>
                        {item.tipo}
                      </S.CardBadge>
                    </S.CardImageWrapper>
                    
                    <S.CardContent>
                      <S.CardTitle>{item.titulo}</S.CardTitle>
                      <S.CardDescription>{item.descricao}</S.CardDescription>

                      <S.TagsRow>
                        <S.Tag variant="green">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{item.data}</span>
                        </S.Tag>
                        
                        <S.Tag variant="orange">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{item.local}</span>
                        </S.Tag>
                      </S.TagsRow>

                      <S.CardFooter>
                        <S.EngagementGroup>
                          <S.EngagementItem>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span>{item.views}</span>
                          </S.EngagementItem>
                          <S.EngagementItem>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>{item.comments}</span>
                          </S.EngagementItem>
                        </S.EngagementGroup>

                        <S.ActionGroup>
                          <S.IconActionButton>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </S.IconActionButton>
                          <S.IconActionButton>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                          </S.IconActionButton>
                          <S.BtnMore>Ver Mais</S.BtnMore>
                        </S.ActionGroup>
                      </S.CardFooter>
                    </S.CardContent>
                  </S.ExploreCard>
                ))}
              </S.FeedGrid>
            ) : (
              <S.EmptyState>
                Nenhum resultado encontrado para "{searchQuery}"
              </S.EmptyState>
            )}
          </S.FeedColumn>

          {/* Coluna 2: Widgets Laterais (SÓ APARECE EM DESKTOP) */}
          <S.WidgetsColumn>
            <S.WidgetCard>
              <S.WidgetTitle>Em Alta</S.WidgetTitle>
              <S.TrendingItem>
                <span className="hashtag">#MaratonaProgramacao</span>
                <span className="count">1.2k posts</span>
              </S.TrendingItem>
              <S.TrendingItem>
                <span className="hashtag">#CienciasUFAM</span>
                <span className="count">834 posts</span>
              </S.TrendingItem>
              <S.TrendingItem>
                <span className="hashtag">#BolsaPesquisa</span>
                <span className="count">620 posts</span>
              </S.TrendingItem>
            </S.WidgetCard>

            <S.WidgetCard>
              <S.WidgetTitle>Sugestões de Conexão</S.WidgetTitle>
              <S.UserSuggestion>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="User" />
                <div className="user-details">
                  <span className="name">Ana Souza</span>
                  <span className="meta">Eng. Civil - UFAM</span>
                </div>
                <S.FollowButton>Seguir</S.FollowButton>
              </S.UserSuggestion>
              <S.UserSuggestion>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="User" />
                <div className="user-details">
                  <span className="name">Pedro Lima</span>
                  <span className="meta">Direito - UEA</span>
                </div>
                <S.FollowButton>Seguir</S.FollowButton>
              </S.UserSuggestion>
            </S.WidgetCard>
          </S.WidgetsColumn>

        </S.ContentLayout>
      </S.MainWrapper>

      {/* 3. MENU INFERIOR MOBILE FIXO */}
      <S.BottomNavMobileOnly>
        <S.NavItem onClick={() => navigate('/home')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </S.NavItem>
        <S.NavItem active onClick={() => navigate('/explorar')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
        </S.NavItem>
        <S.NavItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </S.NavItem>
        <S.NavItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </S.NavItem>
      </S.BottomNavMobileOnly>

    </S.LayoutContainer>
  );
}