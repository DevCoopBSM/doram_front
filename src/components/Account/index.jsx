import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import logo from "../../assets/doram.png";

const Account = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsPopupOpen(true);
    setTimeout(() => setIsPopupOpen(false), 2000);
  };
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Logo src={logo} aly="logo" />
          <S.Text>회원가입 후 도람의 더 다양한 서비스를 만나보세요!</S.Text>
          <S.InputSection>
            <S.Input placeholder="아이디를 입력해 주세요." />
            <S.Input placeholder="이름을 입력해 주세요." />
            <S.Input placeholder="이메일을 입력해 주세요." />
            <S.Input type="password" placeholder="비밀번호를 입력해 주세요." />
          </S.InputSection>
          <S.LoginSection>
            <S.Text2>만약 계정이 있다면?</S.Text2>
            <S.Login>로그인하기</S.Login>
          </S.LoginSection>
          <S.AccountBtn onClick={handleSignUpClick}>회원가입하기</S.AccountBtn>
          {isPopupOpen && (
            <S.PopupContainer>
              <S.PopupText>안녕</S.PopupText>
            </S.PopupContainer>
          )}
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Account;
