import React, { useState, useEffect } from "react";
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
import { getBooks } from "../../api/bookApi";

const bannerBold = {
  color: "#FFF",
  fontSize: "36px",
  fontWeight: "700",
};

const UserMain = () => {
  const [bookList, setBookList] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('popular'); // 'popular' 또는 'recent'

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBookList(response);
        
        // 임시로 랜덤하게 인기순/최신순 정렬
        const shuffled = [...response];
        const popular = shuffled
          .sort(() => Math.random() - 0.5)
          .slice(0, 8);
        const recent = shuffled
          .sort(() => Math.random() - 0.5)
          .slice(0, 8);
        
        setPopularBooks(popular);
        setRecentBooks(recent);
      } catch (error) {
        console.error('책 목록을 불러오는데 실패했습니다:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <MainContainer>
      <UserHeader />
      <Banner style={bannerBold}>
        <BannerText>담당자 선정 2024 상반기 최고의 작품</BannerText>
        <BannerText2>지금 바로 보러가기</BannerText2>
      </Banner>

      <CategorySection>
        <CategoryButton 
          onClick={() => setActiveTab('popular')}
          style={{ 
            backgroundColor: activeTab === 'popular' ? '#007AFF' : '#F0F0F0',
            color: activeTab === 'popular' ? '#FFFFFF' : '#000000'
          }}
        >
          인기순
        </CategoryButton>
        <CategoryButton 
          onClick={() => setActiveTab('recent')}
          style={{ 
            backgroundColor: activeTab === 'recent' ? '#007AFF' : '#F0F0F0',
            color: activeTab === 'recent' ? '#FFFFFF' : '#000000'
          }}
        >
          최신순
        </CategoryButton>
      </CategorySection>

      <BookSection>
        {activeTab === 'popular' ? (
          popularBooks.map((book) => (
            <BookCard key={book.bookId}>
              <BookCover 
                src={`data:image/jpeg;base64,${book.bookImage}`} 
                alt={`${book.bookTitle} cover`} 
              />
              <BookInfo>
                <BookTitle>{book.bookTitle}</BookTitle>
                <br />
                <BookAuthor>{book.userName}</BookAuthor>
              </BookInfo>
            </BookCard>
          ))
        ) : (
          recentBooks.map((book) => (
            <BookCard key={book.bookId}>
              <BookCover 
                src={`data:image/jpeg;base64,${book.bookImage}`} 
                alt={`${book.bookTitle} cover`} 
              />
              <BookInfo>
                <BookTitle>{book.bookTitle}</BookTitle>
                <br />
                <BookAuthor>{book.userName}</BookAuthor>
              </BookInfo>
            </BookCard>
          ))
        )}
      </BookSection>
    </MainContainer>
  );
};

export default UserMain;
