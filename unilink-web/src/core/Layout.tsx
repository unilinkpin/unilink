import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaThLarge, FaCommentDots, FaUser, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// --- ESTILOS DO LAYOUT ---
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
`;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa; 
`;

const Sidebar = styled.nav`
  width: 80px;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 2rem;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 100;

  /* Regras para ecrãs de telemóvel e tablets pequenos */
  @media (max-width: 768px) {
    flex-direction: row; /* Itens ficam lado a lado */
    width: 100%; /* Ocupa a largura toda */
    height: 70px; /* Altura fixa para o menu inferior */
    top: auto; /* Tira o menu do topo */
    bottom: 0; /* Cola o menu na parte de baixo */
    border-radius: 20px 20px 0 0; /* Arredonda as pontas de cima */
    padding: 0; /* Remove o espaçamento do topo */
    justify-content: space-evenly; /* Espalha os ícones por igual */
    box-shadow: 0 -5px 20px rgba(0,0,0,0.1); /* Sombra para destacar */
  }
`;

const IconButton = styled.button<{ $ativo?: boolean }>`
  background-color: ${props => props.$ativo ? '#A7D631' : 'transparent'};
  color: ${props => props.$ativo ? '#111' : '#FFFFFF'};
  border: none;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$ativo ? '#A7D631' : '#333'};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    border-radius: 12px;
  }
`;

const MainArea = styled.div`
  margin-left: 80px; 
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0; /* Remove a margem lateral no mobile */
    padding-bottom: 70px; /* Dá um espaço no fundo para o menu não tapar o conteúdo */
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background-color: #f8f9fa;
  font-family: 'Inter', sans-serif; /* <--- BASTA ADICIONAR ESTA LINHA AQUI */

  @media (max-width: 768px) {
    padding: 1rem 1.5rem; /* Menos espaçamento no mobile */
    flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
    gap: 15px;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  font-weight: 800;
  color: #111;
`;

const LogoPlaceholder = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #111;
  color: #A7D631;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 900;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #EFEFEF;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  width: 350px;
  gap: 10px;
  color: #888;

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde a barra de pesquisa gigante no mobile para não quebrar a tela */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-weight: 600;
  font-size: 0.95rem;

  a {
    text-decoration: none;
    color: #111;
    cursor: pointer;
    transition: 0.2s;
    &:hover { color: #A7D631; }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    a {
      display: none; /* Esconde os links de texto (Notícias, Eventos) no mobile */
    }
  }
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  padding: 6px 16px 6px 8px;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);

  @media (max-width: 768px) {
    padding: 4px 8px 4px 4px; /* Mais compacto no mobile */
    gap: 8px;
  }
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #A7D631;
  color: #111;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-transform: uppercase;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  span.name {
    font-size: 13px;
    font-weight: 700;
    color: #111;
  }
  span.role {
    font-size: 10px;
    color: #888;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o nome no telemóvel para poupar espaço, mostra só o Avatar */
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 5px;
  padding: 5px;
  border-radius: 50%;
  transition: 0.2s;

  &:hover {
    background-color: #fff0f0;
    transform: scale(1.1);
  }
`;

const ContentWrapper = styled.main`
  padding: 0 3rem 3rem 3rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 0 1rem 1rem 1rem; /* Margens menores no telemóvel */
  }
`;

// --- COMPONENTE LAYOUT ---
export default function Layout({ children }: { children: React.ReactNode }) {
  const [nomeUsuario, setNomeUsuario] = useState('Taynara'); 
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('user') || localStorage.getItem('username');
    if (usuarioLogado) {
      try {
        const dadosObj = JSON.parse(usuarioLogado);
        setNomeUsuario(dadosObj.nome || dadosObj.username || 'Taynara');
      } catch {
        setNomeUsuario(usuarioLogado);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/auth/login'); 
  };

  const inicialNome = nomeUsuario.charAt(0);

  return (
    <LayoutContainer>
      {/* Menu Lateral que vira Menu Inferior no Mobile */}
      <Sidebar>
        <IconButton $ativo title="Início"><FaHome /></IconButton>
        <IconButton title="Cursos e Campi"><FaThLarge /></IconButton>
        <IconButton title="Fórum e Comunidade"><FaCommentDots /></IconButton>
        <IconButton title="Perfil"><FaUser /></IconButton>
      </Sidebar>

      <MainArea>
        {/* Cabeçalho do Topo */}
        <Header>
          <HeaderTitle>
            <LogoPlaceholder>UL</LogoPlaceholder>
            UniLink
          </HeaderTitle>
          
          <SearchBar>
            <FaSearch size={16} />
            <input type="text" placeholder="Buscar no UniLink..." />
          </SearchBar>
          
          <NavLinks>
            <a>Notícias</a>
            <a>Eventos</a>
            <a>Campi</a>
            <a>Comunidade</a>
            
            <UserProfileContainer>
              <Avatar>{inicialNome}</Avatar>
              <UserInfo>
                <span className="name">{nomeUsuario}</span>
                <span className="role">Estudante</span>
              </UserInfo>
              <LogoutButton onClick={handleLogout} title="Sair do sistema">
                <FaSignOutAlt />
              </LogoutButton>
            </UserProfileContainer>
          </NavLinks>
        </Header>

        {/* Onde a tela do Campus vai aparecer */}
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainArea>
    </LayoutContainer>
  );
}