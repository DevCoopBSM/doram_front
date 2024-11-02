import styled from "styled-components";

export const MainContainer = styled.main`
  width: 1152px;
  padding: 20px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: center;
  background-color: #8ee559;
  margin-bottom: 20px;
  text-align: center;
`;

export const BannerText = styled.div`
  font-weight: 400;
  font-family: "NanumSquareNeo";
  color: black;
  font-size: 24px;
`;

export const BannerText2 = styled.div`
  font-weight: 400;
  font-size: 36px;
  font-family: "Jalnan";
`;

export const SectionTitle = styled.h2`
  text-align: left;
  margin-bottom: 10px;
  margin-top: 50px;
  font-family: "NanumSquareNeoBold";
  font-weight: 700;
`;

export const CategorySection = styled.div`
  display: flex;
  gap: 32px;
  margin: 20px 0;
  width: 100%;
  border-bottom: 1px solid #EEEEEE;
  padding-bottom: 12px;
`;

export const CategoryButton = styled.div`
  font-size: 16px;
  font-family: "NanumSquareNeoBold";
  cursor: pointer;
  color: ${props => props.active ? '#8ee559' : '#666666'};
  position: relative;
  padding-bottom: 12px;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active ? '#8ee559' : 'transparent'};
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: all 0.3s ease;
  }

  &:hover {
    color: #8ee559;
    
    &::after {
      background-color: #8ee559;
      transform: scaleX(1);
    }
  }
`;

export const BookSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-start;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 96px) / 5);
  cursor: pointer;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.05}s;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BookCover = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 4px;
`;

export const BookInfo = styled.div`
  text-align: left;
`;

export const BookTitle = styled.span`
  font-size: 14px;
  font-family: "NanumSquareNeoBold";
  font-weight: 700;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`;

export const BookAuthor = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 400;
  font-family: "NanumSquareNeo";
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`;

export const DummyBookCover = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: #F0F0F0;
  margin-bottom: 10px;
  border-radius: 4px;
`;
