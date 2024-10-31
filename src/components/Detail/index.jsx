import React, { useState, useRef } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { saveBook } from "../../api/bookApi";

// 마크다운 파싱 함수 추가
const parseMarkdown = (markdown) => {
  if (!markdown) return '';
  
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

const Detail = () => {
  const [publicStatus, setPublicStatus] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // localStorage에서 저장된 데이터 불러오기
  const savedTitle = localStorage.getItem('writeTitle');
  const savedContent = localStorage.getItem('writeContent');

  const handleThumbnailClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }

      setThumbnail(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const bookData = {
        bookTitle: localStorage.getItem('writeTitle'),
        bookTagList: JSON.parse(localStorage.getItem('writeKeywords')),
        bookContent: localStorage.getItem('writeContent'),
        bookType: publicStatus ? "PUBLISHED" : "PRIVATE",
        bookImage: thumbnail
      };

      const response = await saveBook(bookData);
      alert(response.message);
      // 저장 성공 후 필요한 처리 (예: 홈으로 이동)
    } catch (error) {
      alert('책 저장에 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Title>글 미리 보기</S.Title>
          <S.SelectSection>
            <S.DetailSection>
              <S.Detail>
              <S.Font>
                공개 설정
                </S.Font>
                <S.BtnContainer>
                  <S.Btn
                    onClick={() => setPublicStatus(true)}
                    style={{
                      backgroundColor: publicStatus ? "#8ee559" : "white",
                      color: publicStatus ? "white" : "black",
                    }}
                  >
                    전체 공개
                  </S.Btn>
                  <S.Btn
                    onClick={() => setPublicStatus(false)}
                    style={{
                      backgroundColor: !publicStatus ? "#8ee559" : "white",
                      color: !publicStatus ? "white" : "black",
                    }}
                  >
                    비공개
                  </S.Btn>
                </S.BtnContainer>
              </S.Detail>
            </S.DetailSection>
          </S.SelectSection>
        </S.Contain>
        
        <S.ImgSection>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <S.Img 
            style={{
              backgroundImage: thumbnailPreview ? `url(${thumbnailPreview})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <S.UploadBtn onClick={handleThumbnailClick}>
            {thumbnail ? '썸네일 변경하기' : '썸네일 업로드하기'}
          </S.UploadBtn>
        </S.ImgSection>

        <S.PreviewContainer>
          <S.PreviewTitle>{savedTitle}</S.PreviewTitle>
          <S.PreviewContent dangerouslySetInnerHTML={{ __html: parseMarkdown(savedContent) }} />
        </S.PreviewContainer>

        <S.SaveBtn 
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? '저장 중...' : '저장'}
        </S.SaveBtn>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Detail;
