import styled from 'styled-components';

export const colors = {
  primary: '#A6D149',
  black: '#111111',
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

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 24px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const HeaderLeftRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
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
  box-sizing: border-box;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    color: ${colors.black};
    background: transparent;
    &::placeholder { color: ${colors.textSecondary}; }
  }
  @media (max-width: 1024px) {
    max-width: 100%;
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
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 12px;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
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

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

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
    grid-template-columns: 1fr;
  }
`;

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

export const WidgetsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1150px) {
    display: none;
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
    color: #2b7a1d;
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