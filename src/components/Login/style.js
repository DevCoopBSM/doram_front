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
`;

export const Logo = styled.img`
  margin-top: 100px;
  width: 263px;
  height: 85px;
`;

export const Text = styled.div`
  color: "black";
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
  white-space: nowrap;
`;
