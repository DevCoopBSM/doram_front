import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import * as S from './style';
import { ReactComponent as LikeIcon } from '../../assets/Like.svg';
import { ReactComponent as CommentIcon } from '../../assets/Comment.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/Bookmark.svg';

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

const dummyComments = [
  {
    id: 1,
    content: "정말 재미있게 읽었습니다! 다음 작품도 기대할게요 😊",
    author: "독서광",
    createdAt: "2024-03-15T10:30:00Z"
  },
  {
    id: 2,
    content: "작가님의 문체가 너무 매력적이에요. 앞으로도 좋은 작품 부탁드립니다.",
    author: "책벌레",
    createdAt: "2024-03-14T15:20:00Z"
  },
  {
    id: 3,
    content: "이야기 전개가 너무 자연스럽고 좋았어요! 캐릭터들의 감정선도 잘 표현된 것 같아요.",
    author: "문학소녀",
    createdAt: "2024-03-13T09:15:00Z"
  }
];

const formatCommentDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} ${hours}:${minutes}`;
};

function Book() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [comments, setComments] = useState(dummyComments);
    const [newComment, setNewComment] = useState('');
    const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);
    const maxLength = 500;

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

    const handleLike = async () => {
        try {
            // API 호출 로직
            setLiked(!liked);
        } catch (error) {
            console.error('Error updating like:', error);
        }
    };

    const handleBookmark = async () => {
        try {
            // API 호출 로직
            setBookmarked(!bookmarked);
        } catch (error) {
            console.error('Error updating bookmark:', error);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const newCommentObj = {
                id: Date.now(),
                content: newComment,
                author: "현재 로그인한 사용자",
                createdAt: new Date().toISOString()
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const scrollToComments = () => {
        document.querySelector('#comments-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    const handleCommentChange = (e) => {
        const input = e.target.value;
        if (input.length <= maxLength) {
            setNewComment(input);
        }
    };

    const handleOpenCommentForm = () => {
        setIsCommentFormOpen(true);
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
                <S.InteractionContainer>
                    <S.InteractionButton 
                        onClick={handleLike} 
                        active={liked}
                        type="like"
                    >
                        <LikeIcon />
                        <span>{bookData.likes || 0}</span>
                    </S.InteractionButton>
                    
                    <S.InteractionButton 
                        onClick={scrollToComments}
                    >
                        <CommentIcon />
                        <span>{comments.length}</span>
                    </S.InteractionButton>

                    <S.InteractionButton 
                        onClick={handleBookmark} 
                        active={bookmarked}
                        type="bookmark"
                    >
                        <BookmarkIcon />
                    </S.InteractionButton>
                </S.InteractionContainer>

                <S.CommentSection id="comments-section">
                    <S.CommentSectionHeader>
                        <h3>댓글</h3>
                        <S.WriteCommentButton onClick={handleOpenCommentForm}>
                            <CommentIcon style={{ marginRight: '10px' }} />
                            댓글 작성
                        </S.WriteCommentButton>
                    </S.CommentSectionHeader>
                    
                    <S.CommentForm onSubmit={handleCommentSubmit} isOpen={isCommentFormOpen}>
                        <S.CommentInput
                            value={newComment}
                            onChange={handleCommentChange}
                            placeholder="댓글을 작성해주세요 (최대 500자)"
                            maxLength={maxLength}
                        />
                        <S.CharCount>
                            {newComment.length} / {maxLength}
                        </S.CharCount>
                        <S.CommentSubmitButton type="submit">
                            등록
                        </S.CommentSubmitButton>
                    </S.CommentForm>

                    <S.CommentList>
                        {comments.map((comment) => (
                            <S.CommentItem key={comment.id}>
                                <S.CommentHeader>
                                    <S.CommentAuthor>{comment.author}</S.CommentAuthor>
                                    <S.CommentDate>
                                        {formatCommentDate(comment.createdAt)}
                                    </S.CommentDate>
                                </S.CommentHeader>
                                <S.CommentContent>{comment.content}</S.CommentContent>
                            </S.CommentItem>
                        ))}
                    </S.CommentList>
                </S.CommentSection>
            </S.MainContent>
        </S.LayoutContainer>
    );
}

export default Book;
