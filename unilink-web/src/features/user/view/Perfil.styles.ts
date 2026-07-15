import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  
  @media (min-width: 769px) {
    display: none; /* O Layout.tsx já tem Header para Desktop */
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: 1px solid #E8E8E8;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #111;
`;

export const ProfileTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin: 0;
`;

export const AvatarWrapper = styled.div`
  margin-top: 10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #A7D631;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #111;
  margin: 15px 0 5px 0;
`;

export const UserSub = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 600;
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  background-color: #A7D631;
  border-radius: 50%;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #E8E8E8;
  border-radius: 24px;
  padding: 20px 0;
  margin: 25px 0;
`;

export const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #E8E8E8;

  &:last-child {
    border-right: none;
  }

  strong {
    font-size: 20px;
    font-weight: 800;
    color: #111;
  }

  span {
    font-size: 10px;
    color: #888;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 4px;
    letter-spacing: 0.5px;
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 30px;
`;

export const EditButton = styled.button`
  flex: 1;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ShareButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #E8E8E8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #111;
`;

export const TabsRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #E8E8E8;
  margin-bottom: 25px;
`;

export const TabItem = styled.div<{ active?: boolean }>`
  flex: 1;
  text-align: center;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.active ? '#111' : '#888'};
  border-bottom: ${props => props.active ? '3px solid #111' : '3px solid transparent'};
  cursor: pointer;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
`;

export const ProjectCard = styled.div<{ themeType: string }>`
  background-color: ${props => {
    if (props.themeType === 'dark') return '#111';
    if (props.themeType === 'green') return '#BCE259';
    return '#FFF';
  }};
  color: ${props => props.themeType === 'dark' ? '#FFF' : '#111'};
  border: ${props => props.themeType === 'light' ? '1px solid #E8E8E8' : 'none'};
  border-radius: 20px;
  padding: 20px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.themeType === 'light' ? 'center' : 'flex-end'};
  align-items: ${props => props.themeType === 'light' ? 'center' : 'flex-start'};
  position: relative;
  font-weight: 700;
  font-size: 14px;
`;

export const AddCard = styled.div`
  border: 2px dashed #CCC;
  border-radius: 20px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #888;
  cursor: pointer;
`;