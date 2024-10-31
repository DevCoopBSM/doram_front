import React, { useState, useRef } from "react";
import * as S from "./style";
import UserHeader from "../Header";

const Detail = () => {
  const [publicStatus, setPublicStatus] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);

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

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Title>글 미리 보기</S.Title>
          <S.SelectSection>
            <S.DetailSection>
              <S.Detail>
                공개 설정
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
        <S.DescriptionSection>
          <S.Detail>설명</S.Detail>
          <S.DescriptionBox></S.DescriptionBox>
        </S.DescriptionSection>
        <S.SaveBtn>저장</S.SaveBtn>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Detail;
