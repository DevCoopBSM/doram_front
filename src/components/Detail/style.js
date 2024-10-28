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
  font-weight: 800;
  margin-left: 20px;
  white-space: nowrap;
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Detail = styled.div`
  color: "black";
  font-size: 24px;
  font-weight: 600;
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
  width: 174px;
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
  width: 550px;
  height: 104px;
  font-size: 18px;
  border: 2px solid #cccccc;
  padding: 16px 28px;
  resize: none;
  overflow: auto;
  border-radius: 8px;
`;

export const SaveBtn = styled.button`
  position: absolute;
  bottom: 60px;
  left: 1185px;
  margin-top: 75px;
  width: 120px;
  height: 55px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  white-space: nowrap;
`;
