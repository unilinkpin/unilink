import styled from 'styled-components';

// Paleta de cores estendida a partir do padrão do projeto
export const colors = {
  primary: '#A6D149',        // Seu verde limão do figma
  black: '#111111',          // Preto predominante do layout
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

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 375px; /* Mantém a proporção mobile de acordo com o Figma */
  margin: 0 auto;
  background-color: ${colors.white};
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 120px; /* Espaço para o BottomNav fixo */
  box-sizing: border-box;
`;

/* --- Header & Filtros --- */
export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 16px 24px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 90;
  backdrop-filter: blur(6px);
  box-sizing: border-box;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderIcon = styled.button<{ bg?: string }>`
  width: 40px;
  height: 40px;
  background: ${props => props.bg || colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`;

/* --- Busca --- */
export const SearchRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${colors.white};
  border-radius: 24px;
  border: 1px solid ${colors.border};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: ${colors.black};

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const FilterButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

/* --- Pills (Filtros de categoria) --- */
export const PillsScroll = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Pill = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${props => props.active ? colors.black : colors.border};
  background: ${props => props.active ? colors.black : colors.white};
  color: ${props => props.active ? colors.white : colors.black};
  white-space: nowrap;
  transition: all 0.2s ease;
`;

/* --- Feed & Cards --- */
export const FeedContainer = styled.main`
  width: 100%;
  padding: 8px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Card = styled.article`
  width: 100%;
  background: ${colors.white};
  border-radius: 32px;
  border: 1px solid ${colors.border};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardImageArea = styled.div`
  height: 180px;
  position: relative;
  background: ${colors.border};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBadge = styled.span<{ bg: string; color: string }>`
  position: absolute;
  left: 16px;
  top: 11px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
  color: ${colors.black};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
  line-height: 21px;
  margin: 0;
`;

export const InfoTagsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Tag = styled.div<{ variant: 'green' | 'orange' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  width: fit-content;
  
  background: ${props => props.variant === 'green' ? colors.tagGreenBg : colors.tagOrangeBg};
  border: 1px solid ${props => props.variant === 'green' ? colors.tagGreenBorder : colors.tagOrangeBorder};
  color: ${colors.black};
`;

/* --- Rodapé do Card (Interações) --- */
export const CardFooter = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EngagementGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const EngagementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.textSecondary};
  font-size: 13px;
  font-weight: 500;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconActionButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMore = styled.button`
  padding: 8px 16px;
  background: ${colors.black};
  border-radius: 24px;
  color: ${colors.white};
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

/* --- Bottom Navigation --- */
export const BottomNav = styled.nav`
  width: 343px;
  height: 80px;
  padding: 0 24px;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.black};
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 100;
`;

export const NavItem = styled.div<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${props => props.active ? colors.primary : 'transparent'};
`;