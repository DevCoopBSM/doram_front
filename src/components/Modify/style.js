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
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: "black";
  font-size: 32px;
  margin-top: 30px;
  white-space: nowrap;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  margin-top: 40px;
`;

export const UserLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChangeBtn = styled.button`
  margin-top: 105px;
  width: 143px;
  height: 46px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  font-family: "NanumSquareNeoBold";
  font-weight: 700;
  cursor: pointer;
  border: none;
  white-space: nowrap;
`;

export const Detail = styled.div`
  color: "black";
  font-size: 24px;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 700;
  margin-top: 23px;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NameInput = styled.input`
  width: 1152px;
  height: 68px;
  font-size: 18px;
  border: 2px solid #cccccc;
  padding: 16px 28px;
  resize: none;
  overflow: auto;
  border-radius: 8px;
`;

export const IdSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IdInput = styled.input`
  width: 1152px;
  height: 68px;
  font-size: 18px;
  border: 2px solid #cccccc;
  padding: 16px 28px;
  resize: none;
  overflow: auto;
  border-radius: 8px;
`;

export const JoinDate = styled.div`
  font-size: 18px;
`;

export const MailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
`;

export const Mail = styled.div`
  font-size: 18px;
`;

export const MailBtn = styled.button`
  width: 128px;
  height: 46px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
`;

export const IntroduceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IntroduceInput = styled.textarea`
  width: 1152px;
  height: 104px;
  font-size: 18px;
  border: 2px solid #cccccc;
  padding: 16px 28px;
  resize: none;
  overflow: auto;
  border-radius: 8px;
`;

export const SaveBtn = styled.button`
  margin-top: 50px;
  margin-left: 1030px;
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
