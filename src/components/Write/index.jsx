import React, { useState } from 'react';
import { PageContainer, WriteContainer, EditorSection, PreviewSection, MarkdownEditor, PreviewContent, PreviewTitle, TitleInput, ButtonContainer, LeftButton, FeedbackButton, TempSaveButton, PublishButton, KeywordContainer, KeywordTag, RemoveButton, AddKeywordButton, KeywordInput, ToolbarContainer, ToolbarButton } from './style';
import { saveBook } from '../../api/bookApi';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [bookContent, setbookContent] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [isAddingKeyword, setIsAddingKeyword] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const MAX_KEYWORDS = 10;
  const MAX_KEYWORD_LENGTH = 15;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (e) => {
    setbookContent(e.target.value);
  };

  const handleExit = () => {
    alert('나가기 버튼을 눌렀습니다.');
  };

  const handleFeedback = () => {
    alert('피드백 버튼을 눌렀습니다.');
  };

  const handleTempSave = async () => {
    try {
      const bookData = {
        bookTitle: title,
        bookTagList: keywords,
        bookContent: bookContent,
        bookType: "TEMPORARY_SAVED"
      };

      const response = await saveBook(bookData);
      alert(response.message);
    } catch (error) {
      alert('임시 저장 중 오류가 발생했습니다.');
      console.error('임시 저장 오류:', error);
    }
  };

  const handlePublish = () => {
    alert('출간 버튼을 눌렀습니다.');
  };

  const handleAddKeywordClick = () => {
    if (keywords.length >= MAX_KEYWORDS) {
      alert('키워드는 최대 10개까지만 추가할 수 있습니다.');
      return;
    }
    setIsAddingKeyword(true);
  };

  const handleKeywordInputChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_KEYWORD_LENGTH) {
      setNewKeyword(input);
    }
  };

  const handleKeywordInputKeyPress = (e) => {
    if (e.key === 'Enter' && newKeyword.trim()) {
      if (keywords.length >= MAX_KEYWORDS) {
        alert('키워드는 최대 10개까지만 추가할 수 있습니다.');
        return;
      }
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
      setIsAddingKeyword(false);
    }
  };

  const handleRemoveKeyword = (indexToRemove) => {
    setKeywords(keywords.filter((_, index) => index !== indexToRemove));
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

  const insertMarkdown = (type) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = bookContent.substring(start, end);
    let newText = '';

    switch(type) {
      case 'bold':
        newText = `**${selectedText || '굵은 텍스트'}**`;
        break;
      case 'h1':
        newText = `# ${selectedText || '제목 1'}`;
        break;
      case 'h2':
        newText = `## ${selectedText || '제목 2'}`;
        break;
      case 'h3':
        newText = `### ${selectedText || '제목 3'}`;
        break;
      case 'italic':
        newText = `*${selectedText || '기울임'}*`;
        break;
      case 'code':
        newText = `\`${selectedText || '코드'}\``;
        break;
      default:
        return;
    }

    const newContent = bookContent.substring(0, start) + newText + bookContent.substring(end);
    setbookContent(newContent);
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
          <KeywordContainer>
            {keywords.map((keyword, index) => (
              <KeywordTag key={index}>
                {keyword}
                <RemoveButton onClick={() => handleRemoveKeyword(index)}> × </RemoveButton>
              </KeywordTag>
            ))}
            {isAddingKeyword ? (
              <KeywordInput
                value={newKeyword}
                onChange={handleKeywordInputChange}
                onKeyPress={handleKeywordInputKeyPress}
                placeholder={`키워드 입력 (최대 ${MAX_KEYWORD_LENGTH}자)`}
                maxLength={MAX_KEYWORD_LENGTH}
                autoFocus
              />
            ) : (
              <AddKeywordButton 
                onClick={handleAddKeywordClick}
                disabled={keywords.length >= MAX_KEYWORDS}
              >
                + 키워드 추가
              </AddKeywordButton>
            )}
          </KeywordContainer>
          
          {/* 새로운 툴바 추가 */}
          <ToolbarContainer>
            <ToolbarButton onClick={() => insertMarkdown('bold')}>B</ToolbarButton>
            <ToolbarButton onClick={() => insertMarkdown('italic')}>I</ToolbarButton>
            <ToolbarButton onClick={() => insertMarkdown('h1')}>H1</ToolbarButton>
            <ToolbarButton onClick={() => insertMarkdown('h2')}>H2</ToolbarButton>
            <ToolbarButton onClick={() => insertMarkdown('h3')}>H3</ToolbarButton>
            <ToolbarButton onClick={() => insertMarkdown('code')}>{'<>'}</ToolbarButton>
          </ToolbarContainer>

          <MarkdownEditor
            value={bookContent}
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
          {title && <PreviewTitle>{title}</PreviewTitle>}
          <PreviewContent dangerouslySetInnerHTML={{ __html: parseMarkdown(bookContent) }} />
        </PreviewSection>
      </WriteContainer>
    </PageContainer>
  );
};

export default WritePage;
