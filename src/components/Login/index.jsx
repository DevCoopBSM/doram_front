import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/doram.png";
import { login } from "../../api/authApi";
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userPassword: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLoginClick();
    }
  };

  const handleLoginClick = async () => {
    try {
      if (!inputs.userId || !inputs.userPassword) {
        setPopupMessage("아이디와 비밀번호를 모두 입력해주세요.");
        setIsPopupOpen(true);
        setTimeout(() => setIsPopupOpen(false), 2000);
        return;
      }

      const data = await login(inputs);
      setIsLoggedIn(true);
      navigate("/"); // 메인 페이지로 이동
      
    } catch (error) {
      console.error("Login error:", error);
      setPopupMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
      setIsPopupOpen(true);
      setTimeout(() => setIsPopupOpen(false), 2000);
    }
  };

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Logo src={logo} alt="logo" />
          <S.Text>로그인 후 도람의 더 다양한 서비스를 만나보세요!</S.Text>
          <S.InputSection>
            <S.Input 
              name="userId"
              value={inputs.userId}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="아이디를 입력해 주세요." 
            />
            <S.Input 
              name="userPassword"
              type="password"
              value={inputs.userPassword}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="비밀번호를 입력해 주세요." 
            />
          </S.InputSection>
          <S.LoginSection>
            <S.Text2>아직 계정이 없다면?</S.Text2>
            <S.Login onClick={() => navigate("/account")}>회원가입하기</S.Login>
          </S.LoginSection>
          <S.LoginBtn onClick={handleLoginClick}>로그인하기</S.LoginBtn>
          {isPopupOpen && (
            <S.PopupContainer>
              <S.PopupText>{popupMessage}</S.PopupText>
            </S.PopupContainer>
          )}
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Login;
