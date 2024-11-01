import styled from 'styled-components';

export const LayoutContainer = styled.div`
    align-items: center;
    width: 130vh;
    padding: 20px;
    margin: 0 auto;
`;

export const MainContent = styled.main`
`;

export const BookContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

export const BookContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const AuthorDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
`;

export const Stats = styled.div`
    display: flex;
    gap: 1rem;
    color: #666;
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
`;

export const Tag = styled.span`
    background-color: #f1f1f1;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    color: #666;
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
`;

export const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.2rem;
    color: #666;
`;

export const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #ff6b6b;
    font-size: 1.2rem;
`;
