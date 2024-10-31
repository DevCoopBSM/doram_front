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
  width: 100%;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  margin: auto;
`;

export const CategoryButton = styled.button`
  padding: 4px 24px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #0eb400;
  color: #000;
  font-size: 16px;
  width: auto;
  height: 6%;
  font-weight: 400;
  font-family: "NanumSquareNeo";
  &:hover {
    background-color: #ddd;
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
