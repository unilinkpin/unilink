import React, { useState } from 'react';
import * as S from './Explorar.styles';

// Definindo as tipagens necessárias para os itens do feed
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
  categoria: 'Eventos' | 'Notícias' | 'Projetos';
}

type CategoriaFiltro = 'Todos' | 'Eventos' | 'Notícias' | 'Projetos';

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState<CategoriaFiltro>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categorias: CategoriaFiltro[] = ['Todos', 'Eventos', 'Notícias', 'Projetos'];

  // Dados mockados tipados
  const [feedItems] = useState<FeedItem[]>([
    {
      id: 1,
      tipo: 'COMPETIÇÃO',
      badgeBg: '#FF7F50',
      badgeTextColor: '#FFFFFF',
      titulo: '4ª Maratona de Programação IFAM',
      descricao: 'Desafie suas habilidades lógicas e de programação na 4ª Maratona da IFAM...',
      imagem: 'https://placehold.co/325x180',
      data: '25 Nov',
      local: 'IFAM - Campus Parintins',
      views: 128,
      comments: 34,
      categoria: 'Eventos'
    },
    {
      id: 2,
      tipo: 'EVENTO',
      badgeBg: '#D3EEDD',
      badgeTextColor: '#111111',
      titulo: 'Novo Laboratório de Ciências é inaugurado no ICSEZ',
      descricao: 'Com novos equipamentos, o laboratório atenderá os cursos de biologia e química...',
      imagem: 'https://placehold.co/320x180',
      data: 'Hoje, 09:30',
      local: 'UFAM - Campus Parintins',
      views: 256,
      comments: 45,
      categoria: 'Notícias'
    }
  ]);

  // Filtragem dinâmica dos dados baseada no estado
  const filteredFeed = feedItems.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.categoria === activeCategory;
    const matchesSearch = item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.descricao.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <S.Container>
      {/* Header Fixo com Busca */}
      <S.HeaderWrapper>
        <S.HeaderTop>
          <S.HeaderIcon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </S.HeaderIcon>
          <S.HeaderTitle>Explorar</S.HeaderTitle>
          <S.HeaderIcon bg="#F4F4F4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </S.HeaderIcon>
        </S.HeaderTop>

        {/* Input de Busca */}
        <S.SearchRow>
          <S.SearchBar>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <S.SearchInput 
              type="text" 
              placeholder="Buscar eventos, notícias..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </S.SearchBar>
          <S.FilterButton>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </S.FilterButton>
        </S.SearchRow>

        {/* Categoria Pills */}
        <S.PillsScroll>
          {categorias.map((cat) => (
            <S.Pill 
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </S.Pill>
          ))}
        </S.PillsScroll>
      </S.HeaderWrapper>

      {/* Feed */}
      <S.FeedContainer>
        {filteredFeed.length > 0 ? (
          filteredFeed.map((item) => (
            <S.Card key={item.id}>
              <S.CardImageArea>
                <S.CardImage src={item.imagem} alt={item.titulo} />
                <S.CardBadge bg={item.badgeBg} color={item.badgeTextColor}>
                  {item.tipo}
                </S.CardBadge>
              </S.CardImageArea>
              
              <S.CardBody>
                <S.TextSection>
                  <S.CardTitle>{item.titulo}</S.CardTitle>
                  <S.CardDescription>{item.descricao}</S.CardDescription>
                </S.TextSection>

                <S.InfoTagsRow>
                  {/* Tag de Data */}
                  <S.Tag variant="green">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3D936" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{item.data}</span>
                  </S.Tag>
                  {/* Tag de Localização */}
                  <S.Tag variant="orange">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF7F50" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{item.local}</span>
                  </S.Tag>
                </S.InfoTagsRow>

                <S.CardFooter>
                  {/* Views e Comentários */}
                  <S.EngagementGroup>
                    <S.EngagementItem>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>{item.views}</span>
                    </S.EngagementItem>
                    <S.EngagementItem>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{item.comments}</span>
                    </S.EngagementItem>
                  </S.EngagementGroup>

                  {/* Ações */}
                  <S.ActionGroup>
                    <S.IconActionButton>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </S.IconActionButton>
                    <S.IconActionButton>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </S.IconActionButton>
                    <S.BtnMore>VER MAIS</S.BtnMore>
                  </S.ActionGroup>
                </S.CardFooter>

              </S.CardBody>
            </S.Card>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#666666', fontSize: '15px' }}>
            Nenhum resultado encontrado para "{searchQuery}"
          </div>
        )}
      </S.FeedContainer>

      {/* Bottom Nav Fixo */}
      <S.BottomNav>
        <S.NavItem>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </S.NavItem>
        <S.NavItem active>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
        </S.NavItem>
        <S.NavItem>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </S.NavItem>
        <S.NavItem>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </S.NavItem>
      </S.BottomNav>
    </S.Container>
  );
}