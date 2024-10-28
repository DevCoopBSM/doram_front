import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
`;

export const WriteContainer = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  background-color: white;  
  overflow: hidden;
`;

export const EditorSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

export const PreviewSection = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MarkdownEditor = styled.textarea`
  width: 90%;
  height: calc(100% - 70px);
  min-width: 100%;
  border: none;
  resize: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

export const PreviewTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

export const PreviewContent = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0.3em;
    margin-bottom: -0.3em;
  }

  h1 {
    font-size: 2em;
  }

  p {
    margin-bottom: 1em;
  }

  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TitleInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

export const LeftButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #616161;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid #CCC;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RightButton = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
`;

export const FeedbackButton = styled(RightButton)`
  background: var(--Primary, #8EE559);
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: #7cd94e;
  }
`;

export const TempSaveButton = styled(RightButton)`
  background-color: white;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 10px;
  border: 2px solid var(--Primary, #8EE559);
  &:hover {
    background-color: #f0fff0;
  }
`;

export const PublishButton = styled(RightButton)`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  background: var(--Primary, #8EE559);
  &:hover {
    background-color: #7cd94e;
  }
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 90%;
  margin-top: 10px;
`;

export const KeywordTag = styled.span`
  border-radius: 8px;
  border: 2px solid #0EB400;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
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
