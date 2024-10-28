import React from "react";
import * as S from "./style";
import UserHeader from "../Header";
import userImage from "../../assets/userImage.svg";

const Modify = () => {
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Title>프로필 정보 수정</S.Title>
        <S.UserSection>
          <S.UserLogo src={userImage} alt="User Logo" />
          <S.ChangeBtn>사진 변경하기</S.ChangeBtn>
        </S.UserSection>
        <S.NameSection>
          <S.Detail>이름</S.Detail>
          <S.NameInput></S.NameInput>
        </S.NameSection>
        <S.IdSection>
          <S.Detail>아이디</S.Detail>
          <S.IdInput></S.IdInput>
          <S.JoinDate>가입일 : 2023-08-31</S.JoinDate>
        </S.IdSection>
        <S.MailSection>
          <S.Detail>이메일</S.Detail>
          <S.MailContainer>
            <S.Mail>eahenlee@gmail.com</S.Mail>
            <S.MailBtn>이메일 변경</S.MailBtn>
          </S.MailContainer>
        </S.MailSection>
        <S.IntroduceSection>
          <S.Detail>한 줄 소개</S.Detail>
          <S.IntroduceInput></S.IntroduceInput>
        </S.IntroduceSection>
        <S.SaveBtn>저장</S.SaveBtn>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Modify;
