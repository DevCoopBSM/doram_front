import styled from 'styled-components';

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
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
`;

export const AuthorDate = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    
    span {
        font-size: 1rem;
    }
`;

export const Stats = styled.div`
    display: flex;
    gap: 16px;
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #666;
    
    span:first-child {
        font-size: 0.9rem;
    }
    
    span:last-child {
        font-weight: bold;
        color: #333;
    }
`;
