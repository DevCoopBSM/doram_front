import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import { 
    BookContainer, 
    BookContent, 
    Title, 
    InfoContainer, 
    AuthorDate, 
    Stats,
    StatItem 
} from './style';

function Book() {
    const { id } = useParams();
    
    // 더미 데이터
    const dummyData = {
        title: "리액트로 블로그 만들기",
        author: "김도람",
        date: "2024.03.20",
        likes: 15,
        comments: 23
    };

    return (
        <>
            <BookContainer>
            <Header />
                <BookContent>
                    <Title>{dummyData.title}</Title>
                    <InfoContainer>
                        <AuthorDate>
                            <span>{dummyData.author}</span>
                            <span>·</span>
                            <span>{dummyData.date}</span>
                        </AuthorDate>
                        <Stats>
                            <StatItem>
                                <span>좋아요</span>
                                <span>{dummyData.likes}</span>
                            </StatItem>
                            <StatItem>
                                <span>댓글</span>
                                <span>{dummyData.comments}</span>
                            </StatItem>
                        </Stats>
                    </InfoContainer>
                </BookContent>
            </BookContainer>
        </>
    );
}

export default Book;
