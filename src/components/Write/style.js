import styled from 'styled-components';

export const WriteContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const EditorSection = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewSection = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const MarkdownEditor = styled.textarea`
  width: 90%;
  height: 90%;
  min-width: 50vw;
  border: none;
  resize: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

export const PreviewContent = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1em;
    margin-bottom: 0.5em;
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
