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
