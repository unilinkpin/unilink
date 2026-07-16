import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
`;

export const CoverBanner = styled.div`
  width: 100%;
  height: 240px;
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200');
  background-size: cover;
  background-position: center;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 40px;
  margin-top: -70px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-top: -60px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 6px solid #ffffff;
  background: #ffffff;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const DefaultAvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f1f3f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adb5bd;
  font-size: 56px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 24px;
    width: 100%;
  }
`;

export const ActionButton = styled.button<{ primary?: boolean }>`
  background-color: ${props => props.primary ? '#111' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#111'};
  border: ${props => props.primary ? 'none' : '1px solid #E8E8E8'};
  border-radius: 30px;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.primary ? '#333' : '#f5f5f5'};
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const InfoSection = styled.div`
  padding: 24px 40px 0;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    padding: 16px 20px 0;
  }
`;

export const UserName = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #111;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
`;

export const UserSub = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #666;
  font-weight: 500;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 32px 40px;
  margin: 24px 40px;
  background-color: #F8FBEF;
  border-radius: 20px;
  border: 1px solid #E6F2C7;
  @media (max-width: 768px) {
    margin: 24px 20px;
    justify-content: space-between;
    gap: 10px;
    padding: 24px 20px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    align-items: center;
  }
  strong { font-size: 24px; font-weight: 800; color: #111; }
  span { font-size: 12px; color: #888; font-weight: 700; text-transform: uppercase; margin-top: 6px; letter-spacing: 0.5px; }
`;

export const TabsRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #E8E8E8;
  padding: 0 40px;
  margin-bottom: 10px;
  @media (max-width: 768px) { padding: 0 20px; }
`;

export const TabItem = styled.div<{ active?: boolean }>`
  padding: 16px 32px;
  font-size: 15px;
  font-weight: 700;
  color: ${props => props.active ? '#111' : '#888'};
  border-bottom: ${props => props.active ? '3px solid #A7D631' : '3px solid transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { color: #111; }
  @media (max-width: 768px) { flex: 1; text-align: center; padding: 16px 10px; }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 30px 40px 50px;
  @media (max-width: 768px) { padding: 30px 20px 50px; grid-template-columns: 1fr; }
`;

export const ProjectCard = styled.div<{ themeType: string; imagem?: string }>`
  background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
  background-size: cover;
  background-position: center;
  color: #FFF;
  border-radius: 20px;
  padding: 24px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  font-weight: 800;
  font-size: 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  &:hover {
     transform: translateY(-6px);
     box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }
`;

export const ProjectCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
`;

export const AddCard = styled.div`
  border: 2px dashed #CCC;
  border-radius: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #888;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: transparent;
  svg { font-size: 28px; margin-bottom: 12px; color: #CCC; transition: color 0.2s ease; }
  &:hover {
     border-color: #A7D631;
     color: #111;
     background-color: #fafafa;
    svg { color: #A7D631; }
  }
`;

export const TabContentEmpty = styled.div`
  padding: 60px 40px;
  text-align: center;
  color: #888;
  font-size: 15px;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;