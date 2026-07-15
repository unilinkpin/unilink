import styled from 'styled-components';

export const colors = {
  primary: '#A6D149',        // Verde limão do Figma
  black: '#111111',          // Preto predominante
  white: '#ffffff',
  textSecondary: '#666666',
  backgroundLight: '#F4F4F4',
  border: '#E8E8E8',
  tagGreenBg: 'rgba(230, 241, 198, 0.5)',
  tagGreenBorder: '#E6F2C7',
  tagGreenText: '#A3D936',
  tagOrangeBg: '#FFF7ED',
  tagOrangeBorder: '#FFEDD4',
  tagOrangeText: '#FF7F50',
};

/* --- ESTRUTURA GLOBAL DO LAYOUT WEB --- */

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #fafafa;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`;

/* Menu Lateral Esquerdo - Igual ao da Home */
export const Sidebar = styled.aside`
  width: 80px;
  background-color: ${colors.black};
  border-radius: 24px;
  margin: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 28px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;

  @media (max-width: 768px) {
    display: none; /* Oculta na versão mobile */
  }
`;

export const SidebarItem = styled.div<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.active ? colors.black : colors.white};
  background-color: ${props => props.active ? colors.primary : 'transparent'};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.active ? colors.primary : 'rgba(255, 255, 255, 0.1)'};
  }
`;

/* Wrapper do Conteúdo à direita da Sidebar */
export const MainWrapper = styled.div`
  flex: 1;
  margin-left: 120px; /* Dá o espaçamento devido à sidebar fixa */
  padding: 40px 40px 40px 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px 20px 100px 20px; /* Aumento do padding bottom para não cobrir o último card com a bottom bar */
  }
`;

/* --- RESTRUTURAÇÃO DO COMPONENTE EXPLORAR --- */

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderLeftRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`;

export const SearchBar = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: ${colors.white};
  border-radius: 24px;
  border: 1px solid ${colors.border};

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    color: ${colors.black};
    &::placeholder { color: ${colors.textSecondary}; }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const IconButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${colors.black};
`;

export const UserAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${colors.primary};
`;

/* Categorias / Abas */
export const CategoriesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 12px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none; /* Deixa o scroll invisível e nativo no mobile */
  }
`;

export const CategoryTab = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: ${props => props.active ? colors.black : 'transparent'};
  color: ${props => props.active ? colors.white : colors.textSecondary};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${props => props.active ? colors.white : colors.black};
  }
`;

/* Grid de Distribuição de Colunas (Feed + Widgets) */
export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

/* Coluna do Feed Principal */
export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Força coluna única em celulares muito pequenos */
  }
`;

/* --- COMPONENTE DE CARD REESTRUTURADO --- */
export const ExploreCard = styled.article`
  background: ${colors.white};
  border-radius: 24px;
  border: 1px solid ${colors.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.02);
`;

export const CardImageWrapper = styled.div`
  height: 200px;
  position: relative;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBadge = styled.span<{ bg: string; color: string }>`
  position: absolute;
  left: 16px;
  top: 16px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0 0 10px 0;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
  line-height: 1.5;
  margin: 0 0 20px 0;
  flex: 1;
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Tag = styled.div<{ variant: 'green' | 'orange' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.variant === 'green' ? colors.tagGreenBg : colors.tagOrangeBg};
  color: ${props => props.variant === 'green' ? colors.tagGreenText : colors.tagOrangeText};
`;

export const CardFooter = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const EngagementGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const EngagementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.textSecondary};
  font-size: 13px;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 400px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const IconActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  &:hover { color: ${colors.black}; }
`;

export const BtnMore = styled.button`
  padding: 8px 16px;
  background: ${colors.black};
  border-radius: 20px;
  color: ${colors.white};
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

/* --- COLUNA LATERAIS DE WIDGETS (DIREITA) --- */
export const WidgetsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1150px) {
    display: none; /* Oculta em telas médias/pequenas se preferir ocultar os widgets secundários */
  }
`;

export const WidgetCard = styled.div`
  background: ${colors.white};
  border-radius: 24px;
  border: 1px solid ${colors.border};
  padding: 24px;
`;

export const WidgetTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0 0 16px 0;
`;

export const TrendingItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  
  .hashtag {
    font-size: 14px;
    font-weight: 600;
    color: #2b7a1d; /* Modifique para a cor desejada */
    cursor: pointer;
  }
  .count {
    font-size: 11px;
    color: ${colors.textSecondary};
  }
`;

export const UserSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    
    .name { font-size: 13px; font-weight: 600; color: ${colors.black}; }
    .meta { font-size: 11px; color: ${colors.textSecondary}; }
  }
`;

export const FollowButton = styled.button`
  padding: 6px 12px;
  background: transparent;
  border: 1px solid ${colors.border};
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: ${colors.black};
    color: ${colors.white};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 0;
  color: ${colors.textSecondary};
  font-size: 15px;
`;

/* --- BOTTOM NAV MOBILE --- */
export const BottomNavMobileOnly = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    max-width: 400px;
    height: 70px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.black};
    border-radius: 24px;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    z-index: 110;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const NavItem = styled.div<{ active?: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.active ? colors.black : colors.white};
  background: ${props => props.active ? colors.primary : 'transparent'};
  transition: all 0.2s ease;
`;