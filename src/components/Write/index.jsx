import React, { useState } from 'react';
import { WriteContainer, EditorSection, PreviewSection, MarkdownEditor, PreviewContent } from './style';

const WritePage = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  const handleEditorChange = (e) => {
    setMarkdownContent(e.target.value);
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
    <WriteContainer>
      <EditorSection>
        <MarkdownEditor
          value={markdownContent}
          onChange={handleEditorChange}
          placeholder="내용 작성..."
        />
      </EditorSection>
      <PreviewSection>
        <PreviewContent dangerouslySetInnerHTML={{ __html: parseMarkdown(markdownContent) }} />
      </PreviewSection>
    </WriteContainer>
  );
};

export default WritePage;