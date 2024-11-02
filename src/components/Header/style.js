import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

// 애니메이션 키프레임 추가
const fadeInDown = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

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
  ${fadeInDown}
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  width: max-content;
  padding: 10px;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  font-family: "NanumSquare Neo OTF";
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  animation: fadeInDown 0.3s ease-out;
  transform-origin: top center;

  @media (max-width: ${breakpoints.tablet}) {
    min-width: 130px;
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 110px;
    font-size: 12px;
    padding: 6px;
    right: -20px;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  border-radius: 4px;

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
  position: relative;

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

export const AlarmDropdown = styled.div`
  ${fadeInDown}
  position: absolute;
  top: calc(100% + 8px);
  width: 300px;
  background: white;
  border-radius: 12px;
  border: 1px solid #8EE559;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  
  animation: fadeInDown 0.3s ease-out;
  transform-origin: top center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 250px;
  }
`;

export const AlarmHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  font-weight: bold;
  
  span {
    font-size: 16px;
    color: #8EE559;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  color: #000;
  font-size: 14px;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const AlarmList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const AlarmItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const AlarmContent = styled.div`
  flex: 1;
  text-align: left;
  
  div {
    font-size: 14px;
    margin-bottom: 4px;
    color: #000;
  }
`;

export const AlarmTime = styled.span`
  font-size: 12px;
  color: #666;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
  
  img {
    width: 14px;
    height: 14px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`;

export const NoAlarms = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
  font-size: 14px;
`;
