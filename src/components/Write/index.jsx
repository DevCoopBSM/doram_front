import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, WriteContainer, EditorSection, PreviewSection, MarkdownEditor, PreviewContent, PreviewTitle, TitleInput, ButtonContainer, LeftButton, FeedbackButton, TempSaveButton, PublishButton, KeywordContainer, KeywordTag, RemoveButton, AddKeywordButton, KeywordInput, ToolbarContainer, ToolbarButton } from './style';
import { saveBook } from '../../api/bookApi';
import * as N from '../../styles/NotificationStyle';

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [bookContent, setbookContent] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [isAddingKeyword, setIsAddingKeyword] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const MAX_KEYWORDS = 10;
  const MAX_KEYWORD_LENGTH = 15;
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, isSuccess) => {
    const id = Date.now();
    const newNotification = { 
      id, 
      message, 
      isSuccess, 
      isExiting: false,
      isMovingUp: false,
      height: 0
    };
    
    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev => {
        const index = prev.findIndex(n => n.id === id);
        if (index === -1) return prev;

        const height = 95;
        
        return prev.map((notification, i) => {
          if (i === index) {
            return { ...notification, isExiting: true };
          }
          if (i > index) {
            return { 
              ...notification, 
              isMovingUp: true,
              moveDistance: height 
            };
          }
          return notification;
        });
      });

      setTimeout(() => {
        setNotifications(prev => 
          prev.filter(notification => notification.id !== id)
        );
      }, 300);
    }, 3000);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (e) => {
    setbookContent(e.target.value);
  };

  const handleExit = () => {
    if (window.confirm('작성 중인 내용이 저장되지 않을 수 있습니다. 나가시겠습니까?')) {
      navigate('/');
    }
  };

  const handleFeedback = () => {
    addNotification('피드백 기능은 준비 중입니다.', false);
  };

  const handleTempSave = async () => {
    try {
      if (!title.trim()) {
        addNotification('제목을 입력해주세요.', false);
        return;
      }

      localStorage.setItem('writeTitle', title);
      localStorage.setItem('writeKeywords', JSON.stringify(keywords));
      localStorage.setItem('writeContent', bookContent);

      addNotification('임시저장이 완료되었습니다.', true);
    } catch (error) {
      addNotification('임시 저장 중 오류가 발생했습니다.', false);
      console.error('임시 저장 오류:', error);
    }
  };

  const handlePublish = async () => {
    try {
      if (!title.trim()) {
        addNotification('제목을 입력해주세요.', false);
        return;
      }
      if (!bookContent.trim()) {
        addNotification('내용을 입력해주세요.', false);
        return;
      }

      localStorage.setItem('writeTitle', title);
      localStorage.setItem('writeKeywords', JSON.stringify(keywords));
      localStorage.setItem('writeContent', bookContent);

      addNotification('출간 페이지로 이동합니다.', true);
      setTimeout(() => navigate('/detail'), 1000);
    } catch (error) {
      addNotification('오류가 발생했습니다.', false);
      console.error('오류:', error);
    }
  };

  const handleAddKeywordClick = () => {
    if (keywords.length >= MAX_KEYWORDS) {
      addNotification('키워드는 최대 10개까지만 추가할 수 있습니다.', false);
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
        addNotification('키워드는 최대 10개까지만 추가할 수 있습니다.', false);
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
      <N.NotificationContainer>
        {notifications.map(({ id, message, isSuccess, isExiting, isMovingUp, moveDistance }) => (
          <N.NotificationItem 
            key={id} 
            isExiting={isExiting}
            isMovingUp={isMovingUp}
            moveDistance={moveDistance}
          >
            <N.NotificationBar isSuccess={isSuccess} />
            <N.NotificationContent>{message}</N.NotificationContent>
          </N.NotificationItem>
        ))}
      </N.NotificationContainer>
    </PageContainer>
  );
};

export default WritePage;
