import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1152px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1152px;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: "black";
  font-size: 32px;
  font-weight: 800;
  margin-left: 20px;
  white-space: nowrap;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 70px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    text-align: center;
  }
`;

export const UserLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
    height: 120px;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`;

export const UserName = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  margin-bottom: 8px;
  gap: 15px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Name = styled.div`
  font-size: 36px;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const UserEmail = styled.div`
  font-size: 24px;
  color: #666;
  font-family: "NanumSquareNeo";

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const UserBio = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`;

export const EditButton = styled.button`
  width: 128px;
  height: 46px;
  padding: 10px 24px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const FollowerFollowingSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`;

export const FollowerFollowingCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-left: 0px;
  span:first-child {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  span:last-child {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const Num = styled.div`
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
`;

export const Category = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #EEEEEE;
  background: #F8F8F8;
  border-radius: 8px 8px 0 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const CategoryButton = styled.button`
  position: relative;
  flex: 1;
  height: 56px;
  background-color: transparent;
  color: ${props => props.isActive ? '#fff' : '#666666'};
  cursor: pointer;
  border: none;
  font-family: "NanumSquareNeoBold";
  font-size: 20px;
  font-weight: 700;
  transition: color 0.3s ease;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
    font-size: 14px;
  }
`;

export const CategoryIndicator = styled.div`
  position: absolute;
  height: 100%;
  width: 33.33%;
  background: #8EE559;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  transform: translateX(${props => {
    switch(props.activeCategory) {
      case 'write': return '0%';
      case 'like': return '100%';
      case 'save': return '200%';
      default: return '0%';
    }
  }});
`;

export const WriteCategory = styled(CategoryButton)``;
export const LikeCategory = styled(CategoryButton)``;
export const SaveCategory = styled(CategoryButton)``;

export const WriteSection = styled.div`
  margin-top: 50px;
`;

export const ListSection = styled.div`
  margin-top: 0;  // 간격 조정
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const List = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 70px;
    padding: 0 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    padding: 0 8px;
  }
`;

export const BookName = styled.div`
  font-size: 24px;
  color: black;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;
export const Reaction = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18px;
  color: #cccccc;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 15px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
    font-size: 14px;
  }
`;

export const Like = styled.div``;
export const Chat = styled.div``;

export const Plus = styled.img`
  padding-left: 20px;
  padding-right: 20px;
`;
