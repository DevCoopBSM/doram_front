import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/doram.png";

const Login = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsPopupOpen(true);
    setTimeout(() => setIsPopupOpen(false), 2000);
  };
  const Togoaccount = () => {
    navigate("/account");
  };
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Logo src={logo} aly="logo" />
          <S.Text>로그인 후 도람의 더 다양한 서비스를 만나보세요!</S.Text>
          <S.InputSection>
            <S.Input placeholder="아이디를 입력해 주세요." />
            <S.Input type="password" placeholder="비밀번호를 입력해 주세요." />
          </S.InputSection>
          <S.LoginSection>
            <S.Text2>만약 계정이 없다면?</S.Text2>
            <S.Login onClick={Togoaccount}>회원가입하기</S.Login>
          </S.LoginSection>
          <S.LoginBtn onClick={handleLoginClick}>로그인</S.LoginBtn>
          {isPopupOpen && (
            <S.PopupContainer>
              <S.PopupText>!로그인오류</S.PopupText>
            </S.PopupContainer>
          )}
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Login;
