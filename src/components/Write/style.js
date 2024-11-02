import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`;

export const WriteContainer = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  background-color: white;
  overflow: hidden;

  @media (max-width: ${breakpoints.laptop}) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

export const EditorSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
    min-height: 50vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const PreviewSection = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  // 스크롤바 스타일링
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 4px;
    
    &:hover {
      background: #a8a8a8;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
    border-top: 1px solid #eee;
    min-height: 30vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const MarkdownEditor = styled.textarea`
  width: 90%;
  height: calc(100% - 70px);
  min-width: 100%;
  border: none;
  resize: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  padding-left: 58px;
  border-radius: 8px;
  outline: none; // 포커스 테두리 제거

  // 스크롤바 스타일링
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 4px;
    
    &:hover {
      background: #a8a8a8;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 15px;
    padding-left: 40px;
    min-height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    padding: 10px;
    padding-left: 30px;
  }
`;

export const TitleInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 28px;
  font-family: "NanumSquareNeoExtraBold";
  font-weight: 800;
  border: none;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
    padding: 6px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;

  & > div {
    display: flex;
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    
    & > div {
      display: flex;
      gap: 8px;
    }
  }
`;

// 버튼들의 공통 스타일 수정
const ButtonBase = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  min-width: 90px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 6px 12px;
    font-size: 14px;
    min-width: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 10px;
    font-size: 12px;
    min-width: 70px;
    flex: 1;
  }
`;

export const LeftButton = styled(ButtonBase)`
  background-color: white;
  color: #616161;
  border: 2px solid #ccc;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const FeedbackButton = styled(ButtonBase)`
  background: var(--Primary, #8ee559);
  color: #fff;
  border: none;
  margin-right: 4px;
`;

export const TempSaveButton = styled(ButtonBase)`
  background-color: white;
  color: #000;
  border: 2px solid var(--Primary, #8ee559);
  font-size: 14px;
  margin-right: 4px;
`;

export const PublishButton = styled(ButtonBase)`
  background: var(--Primary, #8ee559);
  color: #fff;
  border: none;
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 90%;
  margin-top: 10px;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const KeywordTag = styled.span`
  border-radius: 8px;
  border: 2px solid #0eb400;
  padding: 4px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    padding: 3px 6px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #868e96;
  cursor: pointer;
  font-size: 16px;
  width: 5vh;
  height: 20px;

  &:hover {
    color: #495057;
  }
`;

export const AddKeywordButton = styled.button`
  background: none;
  border: none;
  color: #868e96;
  cursor: pointer;
  font-size: 14px;
  height: 25px;
  margin-right: 15px;

  &:hover {
    color: #495057;
  }
`;

export const KeywordInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 16px;
  background-color: none;
  width: 30vh;
  height: 35px;
  margin-right: 10px;

  &::placeholder {
    color: #868e96;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  padding-left: 13px;
  margin-bottom: 16px;
  width: 90%;
  align-items: center;
`;

export const ToolbarButton = styled.button`
  margin-top: 10px;
  width: 5vh;
  height: 30px;
  padding: 4px 8px;
  background: transparent;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f1f3f5;
  }

  &:active {
    background: #e9ecef;
  }
`;

export const PreviewTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 24px;
  font-family: "NanumSquareNeoExtraBold";
  word-break: break-word;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const PreviewContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  word-break: break-word;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    line-height: 1.7;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 1.6;
  }

  /* 마크다운 스타일링 */
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.8em;
    }
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.8em;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.4em;
    }
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 0.6em;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2em;
    }
  }

  p {
    margin-bottom: 1em;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1em 0;

    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;
