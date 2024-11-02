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
  margin-top: 50px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 30px;
  }
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 32px;
  margin-left: 20px;
  white-space: nowrap;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-left: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  width: 424px;
  height: 42px;
  background: #F8F8F8;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
    height: 36px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 240px;
    height: 32px;
  }
`;

export const Btn = styled.button`
  flex: 1;
  height: 100%;
  background-color: transparent;
  color: #666666;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  font-family: "NanumSquareNeoBold";
  transition: color 0.3s ease;
  z-index: 1;
  position: relative;
  padding: 0;

  &.active {
    color: white;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const StatusIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: #8EE559;
  border-radius: 8px;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.isPublic ? '0%' : '100%'});
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  margin: 30px 0;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 30px;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 200px;
  height: 280px;
  background-color: #d9d9d9;

  @media (max-width: ${breakpoints.tablet}) {
    width: 160px;
    height: 224px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 140px;
    height: 196px;
  }
`;

export const UploadBtn = styled.button`
  width: 200px;
  height: 46px;
  padding: 10px 24px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  white-space: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    width: 160px;
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 140px;
    height: 36px;
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export const PreviewContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    margin: 30px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 15px;
    margin: 20px 0;
  }
`;

export const PreviewTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
    margin-bottom: 16px;
    padding-bottom: 12px;
  }
`;

export const PreviewContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #4a4a4a;
  white-space: pre-wrap;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    max-height: 400px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    max-height: 300px;
    padding: 5px;
  }

  h1 {
    font-size: 24px;
    margin: 24px 0 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
      margin: 20px 0 14px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
      margin: 16px 0 12px;
    }
  }
`;

export const SaveBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 120px;
  height: 55px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
    height: 45px;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80px;
    height: 40px;
    font-size: 16px;
    bottom: 15px;
    right: 15px;
  }
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const Font = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;
