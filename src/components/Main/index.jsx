import React, { useState, useEffect } from "react";
import UserHeader from "../Header/index";
import * as S from "./style";
import { getBooks } from "../../api/bookApi";

// 더미 데이터 추가
const dummyBooks = Array(8).fill().map((_, index) => ({
  bookId: index,
  bookTitle: "책 제목이 들어갈 자리입니다",
  userName: "작가명이 들어갈 자리입니다",
  bookImage: null
}));

const bannerBold = {
  color: "#FFF",
  fontSize: "36px",
  fontWeight: "700",
};

const UserMain = () => {
  const [popularBooks, setPopularBooks] = useState(dummyBooks);
  const [recentBooks, setRecentBooks] = useState(dummyBooks);
  const [randomBooks, setRandomBooks] = useState(dummyBooks);
  const [activeTab, setActiveTab] = useState('popular');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        if (response && response.length > 0) {
          const popular = response.slice(0, 8);
          const recent = [...response].reverse().slice(0, 8);
          const shuffled = [...response].sort(() => Math.random() - 0.5).slice(0, 8);
          
          setPopularBooks(popular);
          setRecentBooks(recent);
          setRandomBooks(shuffled);
        }
      } catch (error) {
        console.error('책 목록을 불러오는데 실패했습니다:', error);
      }
    };

    fetchBooks();
  }, []);

  const renderBookCard = (book, index) => (
    <S.BookCard 
      key={book.bookId} 
      index={index}
    >
      {book.bookImage ? (
        <S.BookCover 
          src={`data:image/jpeg;base64,${book.bookImage}`} 
          alt={`${book.bookTitle} cover`} 
        />
      ) : (
        <S.DummyBookCover />
      )}
      <S.BookInfo>
        <S.BookTitle>{book.bookTitle}</S.BookTitle>
        <br />
        <S.BookAuthor>{book.userName}</S.BookAuthor>
      </S.BookInfo>
    </S.BookCard>
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <S.MainContainer>
      <UserHeader />
      <S.Banner style={bannerBold}>
        <S.BannerText>담당자 선정 2024 상반기 최고의 작품</S.BannerText>
        <S.BannerText2>지금 바로 보러가기</S.BannerText2>
      </S.Banner>

      <S.CategorySection>
        <S.CategoryButton 
          onClick={() => handleTabChange('popular')}
          active={activeTab === 'popular'}
        >
          인기순
        </S.CategoryButton>
        <S.CategoryButton 
          onClick={() => handleTabChange('recent')}
          active={activeTab === 'recent'}
        >
          최신순
        </S.CategoryButton>
        <S.CategoryButton 
          onClick={() => handleTabChange('random')}
          active={activeTab === 'random'}
        >
          랜덤순
        </S.CategoryButton>
      </S.CategorySection>

      <S.BookSection key={animationKey}>
        {activeTab === 'popular' ? popularBooks.map((book, index) => renderBookCard(book, index)) :
         activeTab === 'recent' ? recentBooks.map((book, index) => renderBookCard(book, index)) :
         randomBooks.map((book, index) => renderBookCard(book, index))}
      </S.BookSection>
    </S.MainContainer>
  );
};

export default UserMain;
