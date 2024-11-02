import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const LayoutContainer = styled.div`
    align-items: center;
    width: 90%;
    max-width: 130vh;
    padding: 20px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        width: 95%;
        padding: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        padding: 10px;
    }
`;

export const MainContent = styled.main`
`;

export const BookContainer = styled.div`
    width: 100%;
    padding: 20px;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px;
    }
`;

export const BookContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
    background-color: #fff;

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 60px;
        padding: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 40px;
        padding: 10px;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const AuthorDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
    }
`;

export const Stats = styled.div`
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
    }
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    

`;

export const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
        gap: 0.3rem;
        margin: 0.8rem 0;
    }
`;

export const Tag = styled.span`
    background-color: #f1f1f1;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    color: #666;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
    }
`;

export const BookImage = styled.img`
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 8px;
`;

export const ContentArea = styled.div`
    margin: 2rem 0;
    line-height: 1.8;
    white-space: pre-wrap;
    font-size: 1rem;

    @media (max-width: ${breakpoints.tablet}) {
        margin: 1.5rem 0;
        line-height: 1.6;
        font-size: 0.95rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin: 1rem 0;
        line-height: 1.5;
        font-size: 0.9rem;
    }
`;

export const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.2rem;
    color: #666;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

export const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #ff6b6b;
    font-size: 1.2rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

export const InteractionContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const InteractionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #666;
  font-size: 0.9rem;

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease;
    
    path {
      stroke: ${props => props.active ? (props.type === 'like' ? '#FF6B6B' : '#8ee559') : '#CCCCCC'};
      fill: ${props => props.active ? (props.type === 'like' ? '#FF6B6B' : '#8ee559') : 'none'};
    }
  }

  &:hover {
    svg path {
      stroke: ${props => props.type === 'like' ? '#FF6B6B' : '#8ee559'};
    }
  }
`;

export const CommentSection = styled.div`
  margin-top: 3rem;
`;

export const CommentSectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }
`;

export const CommentForm = styled.form`
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${props => props.isOpen ? '300px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform-origin: top;
  transform: ${props => props.isOpen ? 'scaleY(1)' : 'scaleY(0)'};
`;

export const WriteCommentButton = styled.button`
  display: flex;
  align-items: center;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-left: 30px;
  width: 300px;

  &:hover {
    color: #999;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  padding-bottom: 4rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #8ee559;
  }

  &::placeholder {
    color: #999;
  }
`;

export const CharCount = styled.span`
  position: absolute;
  bottom: 1.2rem;
  left: 1rem;
  color: #999;
  font-size: 0.9rem;
`;

export const CommentSubmitButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  width: 100px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: #8EE559;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    background: #7cd048;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;

export const CommentItem = styled.div`
  padding: 1.2rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 0.95rem;
`;

export const CommentDate = styled.span`
  color: #999;
  font-size: 0.85rem;
  &::before {
    content: '•';
    margin-right: 0.8rem;
  }
`;

export const CommentContent = styled.p`
  color: #666;
  line-height: 1.6;
  margin-top: 0.5rem;
  font-size: 0.95rem;
`;
