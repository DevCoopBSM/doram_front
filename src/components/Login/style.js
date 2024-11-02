import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1152px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 700px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
    gap: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 10px;
    gap: 8px;
  }
`;

export const Logo = styled.img`
  margin-top: 80px;
  width: 263px;
  height: 85px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 210px;
    height: 68px;
    margin-top: 60px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
    height: 58px;
    margin-top: 40px;
  }
`;

export const Text = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 400;
  margin: 30px 0;
  text-align: center;
  white-space: normal;
  word-break: keep-all;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin: 25px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  color: black;
  font-size: 24px;
  font-weight: 400;
  background-color: #f2f2f2;
  padding-left: 24px;
  border: none;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 50px;
    font-size: 20px;
    padding-left: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 45px;
    font-size: 16px;
    padding-left: 16px;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 20px;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
    margin-top: 15px;
  }
`;

export const Text2 = styled.div`
  color: #41434c;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Login = styled.div`
  color: #0085ff;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const LoginBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 77px;
  background-color: #8ee559;
  color: #ffffff;
  font-size: 32px;
  word-wrap: "break-word";
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
`;
