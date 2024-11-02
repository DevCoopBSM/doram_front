import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const WriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  height: 40px;
  background: var(--Primary, #8ee559);
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 36px;
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 32px;
    font-size: 12px;
    padding: 4px 10px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 15px;
    flex-wrap: wrap;
    gap: 10px;
    
    & > *:last-child {
      margin-left: auto;
    }
    
    ${WriteButton} {
      order: 2;
      margin-right: 15px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 0;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80px;
    margin-left: 20px;
  }
`;

export const SearchBar = styled.input`
  width: 600px;
  height: 45px;
  padding: 10px 30px;
  border-radius: 8px;
  border: 4px solid #0eb400;
  background: #fff;
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin: 0 20px;
  font-family: "NanumSquareNeoBold";

  @media (max-width: ${breakpoints.laptop}) {
    width: 400px;
    font-size: 16px;
    height: 40px;
    margin: 0 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    order: 3;
    margin: 10px 0;
    font-size: 14px;
    height: 38px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 30px;
      height: 30px;
    }
  }

  span {
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border: 1px solid #ccc;
  background: #fff;
  font-family: "NanumSquare Neo OTF";
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    padding: 6px;
    right: -20px;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 10px;
  }
`;

export const AlarmButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 20px;
      height: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  span {
    font-size: 16px;
    color: #000;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    order: 3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 20px;
  }
`;

export const LoginIcon = styled.img`
  width: 16px;
  height: 18px;
  margin-right: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 14px;
    height: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 12px;
    height: 14px;
  }
`;
