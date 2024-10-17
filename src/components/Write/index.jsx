import React, { useState } from 'react';
import { PageContainer, WriteContainer, EditorSection, PreviewSection, MarkdownEditor, PreviewContent, TitleInput, ButtonContainer, LeftButton, FeedbackButton, TempSaveButton, PublishButton } from './style';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  const handleExit = () => {
    alert('나가기 버튼을 눌렀습니다.');
  };

  const handleFeedback = () => {
    alert('피드백 버튼을 눌렀습니다.');
  };

  const handleTempSave = () => {
    alert('임시 저장 버튼을 눌렀습니다.');
  };

  const handlePublish = () => {
    alert('출간 버튼을 눌렀습니다.');
  };

  const parseMarkdown = (markdown) => {
    // 간단한 마크다운 파싱 로직
    let parsed = markdown
      .replace(/#{1,6} (.+)/g, (match, p1, offset, string) => {
        const level = match.trim().split(' ')[0].length;
        return `<h${level}>${p1}</h${level}>`;
      })
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
    
    return parsed;
  };

  return (
    <PageContainer>
      <WriteContainer>
        <EditorSection>
          <TitleInput
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요..."
          />
          <MarkdownEditor
            value={markdownContent}
            onChange={handleEditorChange}
            placeholder="내용 작성..."
          />
          <ButtonContainer>
            <LeftButton onClick={handleExit}>나가기</LeftButton>
            <div>
              <FeedbackButton onClick={handleFeedback}>피드백</FeedbackButton>
              <TempSaveButton onClick={handleTempSave}>임시 저장</TempSaveButton>
              <PublishButton onClick={handlePublish}>출간</PublishButton>
            </div>
          </ButtonContainer>
        </EditorSection>
        <PreviewSection>
          <h1>{title}</h1>
          <PreviewContent dangerouslySetInnerHTML={{ __html: parseMarkdown(markdownContent) }} />
        </PreviewSection>
      </WriteContainer>
    </PageContainer>
  );
};

export default WritePage;
