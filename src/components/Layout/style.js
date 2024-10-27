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
  max-width: calc(100% - 288px); /* 144px margin on both sides */
  margin: 0 144px;
  padding: 20px 0; /* Optional: To give some vertical padding */
  box-sizing: border-box;
`;
