import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1152px;
  padding: 20px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 465px;
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.div`
  color: "black";
  font-size: 32px;
  margin-left: 20px;
  white-space: nowrap;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const Font = styled.div`
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
`;
export const Detail = styled.div`
  color: "black";
  font-size: 24px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-top: 16px;
`;

export const Btn = styled.button`
  width: 212px;
  height: 42px;
  background-color: white;
  color: black;
  border: 3px solid #8ee559;
  border-radius: 8px;
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
`;

export const Img = styled.div`
  position: relative;
  bottom: 42px;
  left: 20px;
  width: 200px;
  height: 280px;
  background-color: #d9d9d9;
`;

export const UploadBtn = styled.button`
  position: relative;
  top: 192px;
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
`;

export const DescriptionSection = styled.div`
  position: absolute;
  bottom: 60px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DescriptionBox = styled.textarea`
  width: 80vh;
  height: 170px;
  padding: 15px;
  margin-bottom: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  
  &:focus {
    outline: none;
    border-color: #AEAEAE;
  }
  
  &::placeholder {
    font-family: inherit;
  }
`;

export const SaveBtn = styled.button`
  position: absolute;
  bottom: 60px;
  left: 75%;
  margin-top: 75px;
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
`;
