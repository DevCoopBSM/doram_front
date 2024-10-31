import React from "react";
import UserHeader from "../Header/index";
import {
  MainContainer,
  Banner,
  BannerText,
  BannerText2,
  SectionTitle,
  CategorySection,
  CategoryButton,
  BookSection,
  BookCard,
  BookCover,
  BookInfo,
  BookTitle,
  BookAuthor,
} from "./style";
import books from "./books";

const categories = {
  Category1: [
    "시",
    "소설",
    "대하 소설",
    "장편 소설",
    "단편 소설",
    "논설문",
    "설명문",
    "수필",
    "에세이",
  ],
  Category2: [
    "로멘스",
    "러브 코미디",
    "스릴러",
    "판타지",
    "공포",
    "회귀",
    "출판됨",
    "출판 가능",
    "액션",
  ],
};

const bannerBold = {
  color: "#FFF",
  fontSize: "36px",
  fontWeight: "700",
};

const UserMain = () => {
  return (
    <MainContainer>
      <UserHeader />
      <Banner style={bannerBold}>
        <BannerText>담당자 선정 2024 상반기 최고의 작품</BannerText>
        <BannerText2>지금 바로 보러가기</BannerText2>
      </Banner>
      <SectionTitle>마음에 드는 책을 골라 읽어요 🎶</SectionTitle>

      {Object.entries(categories).map(([categoryKey, categoryItems]) => (
        <CategorySection key={categoryKey}>
          {categoryItems.map((item) => (
            <CategoryButton key={item}>{item}</CategoryButton>
          ))}
        </CategorySection>
      ))}

      <SectionTitle>요즘 가장 핫한 이야기만 모아봤어요! 🔥</SectionTitle>
      <BookSection>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookCover src={book.image} alt={`${book.title} cover`} />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <br />
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
          </BookCard>
        ))}
      </BookSection>

      <SectionTitle>따끈따끈 갓 올라온 이야기들을 만나볼까요? ✨</SectionTitle>
      <BookSection>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookCover src={book.image} alt={`${book.title} cover`} />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <br />
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
          </BookCard>
        ))}
      </BookSection>

      <SectionTitle>포근포근~ 내 마음을 위로해줄 에세이들 ☁️</SectionTitle>
      <BookSection>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookCover src={book.image} alt={`${book.title} cover`} />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <br />
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
          </BookCard>
        ))}
      </BookSection>

      <SectionTitle>여기, 아가씨의 지성을 위한 설명문입니다. 📖</SectionTitle>
      <BookSection>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookCover src={book.image} alt={`${book.title} cover`} />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <br />
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
          </BookCard>
        ))}
      </BookSection>
    </MainContainer>
  );
};

export default UserMain;
