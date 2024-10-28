import React, { useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";

const Detail = () => {
  const [publicStatus, setPublicStatus] = useState(null);
  const [publishStatus, setPublishStatus] = useState(null);

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
                      backgroundColor:
                        publicStatus === true ? "#8ee559" : "white",
                      color: publicStatus === true ? "white" : "black",
                    }}
                  >
                    전체 공개
                  </S.Btn>
                  <S.Btn
                    onClick={() => setPublicStatus(false)}
                    style={{
                      backgroundColor:
                        publicStatus === false ? "#8ee559" : "white",
                      color: publicStatus === false ? "white" : "black",
                    }}
                  >
                    비공개
                  </S.Btn>
                </S.BtnContainer>
              </S.Detail>
              <S.Detail>
                출판 희망 유무
                <S.BtnContainer>
                  <S.Btn
                    onClick={() => setPublishStatus(true)}
                    style={{
                      backgroundColor:
                        publishStatus === true ? "#8ee559" : "white",
                      color: publishStatus === true ? "white" : "black",
                    }}
                  >
                    예
                  </S.Btn>
                  <S.Btn
                    onClick={() => setPublishStatus(false)}
                    style={{
                      backgroundColor:
                        publishStatus === false ? "#8ee559" : "white",
                      color: publishStatus === false ? "white" : "black",
                    }}
                  >
                    아니요
                  </S.Btn>
                </S.BtnContainer>
              </S.Detail>
            </S.DetailSection>
          </S.SelectSection>
        </S.Contain>
        <S.ImgSection>
          <S.Img />
          <S.UploadBtn>썸네일 업로드하기</S.UploadBtn>
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
