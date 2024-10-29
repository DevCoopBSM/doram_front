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
  display: flex;
  justify-content: center;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 40px;
  width: 263px;
  height: 85px;
`;

export const Text = styled.div`
  color: "black";
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
  white-space: nowrap;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  width: 700px;
  color: #808080;
  font-size: 24px;
  font-weight: 400;
  background-color: #f2f2f2;
  white-space: nowrap;
  padding-left: 24px;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 20px;
`;

export const Text2 = styled.div`
  color: #41434c;
  font-size: 24px;
  font-weight: "400";
  word-wrap: "break-word";
`;

export const Login = styled.div`
  color: #0085ff;
  font-size: 24px;
  font-weight: "400";
  word-wrap: "break-word";
`;

export const AccountBtn = styled.button`
  margin-top: 20px;
  width: 700px;
  height: 77px;
  background-color: #8ee559;
  color: #ffffff;
  font-size: 32px;
  font-weight: "400";
  word-wrap: "break-word";
`;
