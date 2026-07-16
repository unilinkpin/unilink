import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logoUnilink.png';

const colors = {
  primary: '#A7D631',
  primaryHover: '#96C228',
  black: '#111111',
  white: '#FFFFFF',
  border: '#E8E8E8',
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F8F9FA;
  font-family: 'Inter', sans-serif;
  position: relative;
`;

const TopNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: ${colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.white};
  padding: 4px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
  img {
    height: 28px;
    object-fit: contain;
  }
`;

const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TopMenuItem = styled.button<{ $active?: boolean }>`
  height: 38px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.$active ? colors.primary : 'transparent'};
  color: ${props => props.$active ? colors.black : colors.white};
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.$active ? colors.primaryHover : '#2C2C2C'};
  }
`;

const ExitButton = styled.button`
  height: 38px;
  background-color: #ff4d4d;
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: 8px;
  &:hover {
    background-color: #ff3333;
  }
`;

const BottomNavMobileOnly = styled.nav`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 32px);
    max-width: 400px;
    height: 64px;
    padding: 0 24px;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.black};
    border-radius: 28px;
    box-sizing: border-box;
    z-index: 1100;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const NavItemMobile = styled.button<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.$active ? colors.black : colors.white};
  background-color: ${props => props.$active ? colors.primary : 'transparent'};
  transition: all 0.2s ease;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 88px 40px 40px 40px;
  @media (max-width: 1024px) {
    padding: 24px 16px 120px 16px;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  return (
    <LayoutContainer>
      <TopNavbar>
        <Brand onClick={() => navigate('/home')}>
          <img src={logoImg} alt="UniLink Logo" />
        </Brand>
        <NavLinksContainer>
          <TopMenuItem $active={isActive('/home')} onClick={() => navigate('/home')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            Início
          </TopMenuItem>
          <TopMenuItem $active={isActive('/campus')} onClick={() => navigate('/campus')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
            Campus
          </TopMenuItem>
          <TopMenuItem $active={isActive('/explorar')} onClick={() => navigate('/explorar')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            Explorar
          </TopMenuItem>
          <TopMenuItem $active={isActive('/perfil')} onClick={() => navigate('/perfil')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            Perfil
          </TopMenuItem>
          <ExitButton onClick={handleLogout}>
            SAIR
          </ExitButton>
        </NavLinksContainer>
      </TopNavbar>

      <MainContent>
        {children}
      </MainContent>

      <BottomNavMobileOnly>
        <NavItemMobile $active={isActive('/home')} onClick={() => navigate('/home')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
        </NavItemMobile>
        <NavItemMobile $active={isActive('/campus')} onClick={() => navigate('/campus')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
        </NavItemMobile>
        <NavItemMobile $active={isActive('/explorar')} onClick={() => navigate('/explorar')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </NavItemMobile>
        <NavItemMobile $active={isActive('/perfil')} onClick={() => navigate('/perfil')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </NavItemMobile>
      </BottomNavMobileOnly>
    </LayoutContainer>
  );
}