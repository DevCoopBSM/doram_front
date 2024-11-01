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
  justify-content: flex-start;
  gap: 12px;
  margin: 20px 0;
  width: 100%;
`;

export const CategoryButton = styled.button`
  padding: 6px 20px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  font-family: "NanumSquareNeoBold";
  transition: all 0.2s ease;
  border: none;
  background-color: #F0F0F0;
  color: #666;

  &.active {
    background-color: #8ee559;
    color: #fff;
    box-shadow: 0 2px 8px rgba(142, 229, 89, 0.3);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:not(.active):hover {
    background-color: #e5e5e5;
  }
`;

export const BookSection = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: space-around;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const BookCover = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const BookInfo = styled.div`
  text-align: left;
`;

export const BookTitle = styled.span`
  font-size: 14px;
  font-family: "NanumSquareNeoBold";
  font-weight: 700;
`;

export const BookAuthor = styled.span`
  font-size: 12px;
  color: #555;
  font-weight: 400;
  font-family: "NanumSquareNeo";
`;
