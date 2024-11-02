import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import * as S from './style';

const createDummyData = (bookId) => ({
  bookId: bookId,
  bookTitle: `Book #${bookId}`,
  userName: "Unknown Author",
  publishedAt: [2024, 1, 1],
  likes: 0,
  comments: 0,
  bookTags: ["error", "dummy"],
  bookImage: null,
  bookContent: "책을 불러오는데 실패했습니다."
});

function Book() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`/api/books/${id}`);
                setBookData(response.data);
            } catch (err) {
                console.error('Error fetching book:', err);
                setBookData(createDummyData(id));
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookData();
    }, [id]);

    const formatDate = (publishedAt) => {
        if (!publishedAt) return '';
        const [year, month, day] = publishedAt;
        return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
    };

    if (isLoading) return <S.LoadingSpinner>로딩 중...</S.LoadingSpinner>;
    if (!bookData) return null;

    return (
        <S.LayoutContainer>
            <Header />
            <S.MainContent>
                <S.BookContainer>
                    <S.BookContent>
                        <S.Title>{bookData.bookTitle}</S.Title>
                        <S.InfoContainer>
                            <S.AuthorDate>
                                <span>{bookData.userName}</span>
                                <span>·</span>
                                <span>{formatDate(bookData.publishedAt)}</span>
                            </S.AuthorDate>
                            <S.Stats>
                                <S.StatItem>
                                    <span>좋아요</span>
                                    <span>{bookData.likes || 0}</span>
                                </S.StatItem>
                                <S.StatItem>
                                    <span>댓글</span>
                                    <span>{bookData.comments || 0}</span>
                                </S.StatItem>
                            </S.Stats>
                        </S.InfoContainer>
                        
                        {bookData.bookTags && bookData.bookTags.length > 0 && (
                            <S.TagContainer>
                                {bookData.bookTags.map((tag, index) => (
                                    <S.Tag key={index}>#{tag}</S.Tag>
                                ))}
                            </S.TagContainer>
                        )}

                        {bookData.bookImage && (
                            <S.BookImage 
                                src={`data:image/jpeg;base64,${bookData.bookImage}`} 
                                alt={bookData.bookTitle} 
                            />
                        )}

                        <S.ContentArea>
                            {bookData.bookContent}
                        </S.ContentArea>
                    </S.BookContent>
                </S.BookContainer>
            </S.MainContent>
        </S.LayoutContainer>
    );
}

export default Book;
