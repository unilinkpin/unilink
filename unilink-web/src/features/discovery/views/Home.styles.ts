import styled from 'styled-components';

export const colors = {
  primary: '#A7D631',       // Verde limão principal
  primaryHover: '#96C228',
  black: '#111111',         // Preto suave das fontes/botões
  white: '#FFFFFF',
  text: '#7F7F7F',          // Cinza dos textos auxiliares
  backgroundLight: '#F5F5F5',
  border: '#F0F0F0',
  tagLightBg: '#EAF6C6',    // Verde clarinho para fundos secundários
  cardEventGreen: '#DCEFA7', // Verde de fundo para os cards de eventos
  cardEventDark: '#1E1E1E',  // Preto de fundo para o card destacado de evento
};

export const LogoTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
  letter-spacing: -0.5px;
`;

// Layout principal que separa a Sidebar lateral do restante da página
export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F8F9FA;
  font-family: 'Inter', sans-serif;
  position: relative;
`;

/* --- SIDEBAR LATERAL (Estilo Cápsula do Figma - Desktop) --- */
export const Sidebar = styled.aside`
  width: 80px;
  background-color: ${colors.black};
  margin: 24px 0 24px 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  gap: 32px;
  height: calc(100vh - 48px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 1024px) {
    display: none; /* Oculta completamente no mobile/tablet */
  }
`;

export const SidebarItem = styled.button<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: none;
  background-color: ${props => props.active ? colors.primary : 'transparent'};
  color: ${props => props.active ? colors.black : colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? colors.primaryHover : '#2C2C2C'};
  }
`;

/* --- BOTTOM NAVIGATION FIXED (Mobile & Tablet - Estilo Cápsula Inferior) --- */
export const BottomNavMobileOnly = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 32px);
    max-width: 400px;
    height: 72px;
    padding: 0 24px;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.black};
    border-radius: 32px;
    box-sizing: border-box;
    z-index: 110;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const NavItemMobile = styled.button<{ active?: boolean }>`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.active ? colors.black : colors.white};
  background-color: ${props => props.active ? colors.primary : 'transparent'};
  transition: all 0.2s ease;
`;

/* --- ÁREA PRINCIPAL DA PÁGINA (Tudo à direita da Sidebar) --- */
export const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 124px; /* Abre espaço para a Sidebar fixa */
  padding-right: 24px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 0 16px 120px 16px; /* Aumentado padding-bottom no mobile para os cards não sumirem atrás da barra fixa */
  }
`;

/* --- HEADER SUPERIOR --- */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #F1F3F5;
  border-radius: 20px;
  padding: 8px 16px;
  gap: 8px;
  width: 200px;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    width: 100%;
    &::placeholder {
      color: #999;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    color: ${colors.black};
    font-weight: 500;
    font-size: 14px;
    transition: color 0.2s;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonEntrar = styled.button`
  background-color: red;
  color: ${colors.black};
  border: none;
  border-radius: 20px;
  padding: 8px 24px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

/* --- CONTEÚDO PRINCIPAL --- */
export const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 60px;
`;

/* --- BANNER PRINCIPAL --- */
export const Banner = styled.section`
  background-color: #D6ECB2; 
  border-radius: 28px;
  padding: 24px 40px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 200px; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
  }
`;

export const BannerLeft = styled.div`
  max-width: 60%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BannerRight = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BannerImage = styled.img`
  width: 260px; 
  height: 160px; 
  object-fit: cover;
  border-radius: 24px;
  border-bottom-right-radius: 0px; 
  clip-path: ellipse(100% 100% at 50% 50%); 

  @media (max-width: 900px) {
    display: none; 
  }
`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px; 
`;

export const BannerButton = styled.button<{ variant?: 'dark' | 'light' }>`
  padding: 10px 20px; 
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.variant === 'dark' ? colors.black : colors.white};
  color: ${props => props.variant === 'dark' ? colors.white : colors.black};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const BadgeWelcome = styled.span`
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 9px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 10px;
  letter-spacing: 1px;
  width: fit-content;
`;

export const BannerTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px; 
  font-weight: 700;
  color: ${colors.black};
  margin: 12px 0 6px 0;
  letter-spacing: -0.5px;
`;

export const BannerSubtitle = styled.p`
  font-size: 14px; 
  color: #555555;
  margin: 0;
  line-height: 20px;
  max-width: 90%;
`;

/* --- ESTRUTURA GERAL DE SEÇÕES --- */
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`;

export const RoundBlackButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${colors.black};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

/* --- GRIDS RESPONSIVOS --- */
export const GridNoticias = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const GridEventos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const GridCampi = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* --- CARDS --- */
export const NewsCard = styled.article`
  background-color: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 28px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
`;

export const NewsImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 20px;
  overflow: hidden;
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NewsBadge = styled.span<{ dark?: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${props => props.dark ? colors.black : colors.primary};
  color: ${props => props.dark ? colors.white : colors.black};
  font-size: 9px;
  font-weight: 800;
  padding: 4px 8px;
  border-radius: 6px;
`;

export const NewsTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
  line-height: 18px;
  min-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NewsButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background-color: ${colors.tagLightBg};
  color: ${colors.black};
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const NewsDescription = styled.p`
  font-size: 12px;
  color: ${colors.text};
  line-height: 16px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const EventCard = styled.article<{ bgType?: 'green' | 'dark' }>`
  background-color: ${props => 
    props.bgType === 'green' ? colors.cardEventGreen : 
    props.bgType === 'dark' ? colors.cardEventDark : colors.white
  };
  color: ${props => props.bgType === 'dark' ? colors.white : colors.black};
  border: 1px solid ${props => props.bgType ? 'transparent' : colors.border};
  border-radius: 28px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
`;

export const EventTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 20px;
`;

export const EventDescription = styled.p<{ isDark?: boolean }>`
  font-size: 12px;
  color: ${props => props.isDark ? '#AAAAAA' : colors.text};
  line-height: 18px;
  margin: 0;
  flex: 1;
`;

export const EventButton = styled.button<{ bgType?: 'green' | 'dark' }>`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background-color: ${props => props.bgType === 'green' || props.bgType === 'dark' ? '#FFFFFF' : colors.black};
  color: ${props => props.bgType === 'green' || props.bgType === 'dark' ? colors.black : colors.white};
`;

export const CampusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  background-color: ${colors.white};
`;

export const CampusIconContainer = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const CampusInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CampusName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`;

export const CampusSub = styled.p`
  font-size: 11px;
  color: ${colors.text};
  margin: 0;
`;