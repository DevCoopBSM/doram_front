import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/doram.png";
import { signup } from "../../api/authApi";

const Account = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUpClick = async () => {
    try {
      const response = await signup(inputs);
      setPopupMessage(response.message);
      setIsPopupOpen(true);
      setTimeout(() => {
        setIsPopupOpen(false);
        navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
      }, 2000);
    } catch (error) {
      setPopupMessage("회원가입에 실패했습니다.");
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
          <S.Text>회원가입 후 도람의 더 다양한 서비스를 만나보세요!</S.Text>
          <S.InputSection>
            <S.Input 
              name="userId"
              value={inputs.userId}
              onChange={handleInputChange}
              placeholder="아이디를 입력해 주세요." 
            />
            <S.Input 
              name="userName"
              value={inputs.userName}
              onChange={handleInputChange}
              placeholder="이름을 입력해 주세요." 
            />
            <S.Input 
              name="userEmail"
              value={inputs.userEmail}
              onChange={handleInputChange}
              placeholder="이메일을 입력해 주세요." 
            />
            <S.Input 
              name="userPassword"
              type="password"
              value={inputs.userPassword}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력해 주세요." 
            />
          </S.InputSection>
          <S.LoginSection>
            <S.Text2>만약 계정이 있다면?</S.Text2>
            <S.Login onClick={() => navigate("/login")}>로그인하기</S.Login>
          </S.LoginSection>
          <S.AccountBtn onClick={handleSignUpClick}>회원가입하기</S.AccountBtn>
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

export default Account;
