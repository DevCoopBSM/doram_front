import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import { 
    BookContainer, 
    BookContent, 
    Title, 
    InfoContainer, 
    AuthorDate, 
    Stats,
    StatItem,
    LayoutContainer,
    MainContent,
    TagContainer,
    Tag,
    BookImage,
    ContentArea,
    LoadingSpinner,
    ErrorMessage 
} from './style';

function Book() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`/api/books/${id}`);
                setBookData(response.data);
                setError(null);
            } catch (err) {
                setError('책을 불러오는데 실패했습니다.');
                console.error('Error fetching book:', err);
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

    if (isLoading) return <LoadingSpinner>로딩 중...</LoadingSpinner>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (!bookData) return null;

    return (
        <LayoutContainer>
            <Header />
            <MainContent>
                <BookContainer>
                    <BookContent>
                        <Title>{bookData.bookTitle}</Title>
                        <InfoContainer>
                            <AuthorDate>
                                <span>{bookData.userName}</span>
                                <span>·</span>
                                <span>{formatDate(bookData.publishedAt)}</span>
                            </AuthorDate>
                            <Stats>
                                <StatItem>
                                    <span>좋아요</span>
                                    <span>{bookData.likes || 0}</span>
                                </StatItem>
                                <StatItem>
                                    <span>댓글</span>
                                    <span>{bookData.comments || 0}</span>
                                </StatItem>
                            </Stats>
                        </InfoContainer>
                        
                        {bookData.bookTags && bookData.bookTags.length > 0 && (
                            <TagContainer>
                                {bookData.bookTags.map((tag, index) => (
                                    <Tag key={index}>#{tag}</Tag>
                                ))}
                            </TagContainer>
                        )}

                        {bookData.bookImage && (
                            <BookImage 
                                src={`data:image/jpeg;base64,${bookData.bookImage}`} 
                                alt={bookData.bookTitle} 
                            />
                        )}

                        <ContentArea>
                            {bookData.bookContent}
                        </ContentArea>
                    </BookContent>
                </BookContainer>
            </MainContent>
        </LayoutContainer>
    );
}

export default Book;
