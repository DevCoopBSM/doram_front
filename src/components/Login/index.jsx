import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/doram.png";
import { login } from "../../api/authApi";
import { useAuth } from '../../context/AuthContext';
import * as N from '../../styles/NotificationStyle';

const Login = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userPassword: "",
  });
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserName } = useAuth();

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

    // 3초 후에 알림 제거 시작
    setTimeout(() => {
      setNotifications(prev => {
        const index = prev.findIndex(n => n.id === id);
        if (index === -1) return prev;

        const height = 95; // 알림 높이(80px) + 마진(15px)
        
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

      // 애니메이션 완료 후 실제 제거
      setTimeout(() => {
        setNotifications(prev => 
          prev.filter(notification => notification.id !== id)
        );
      }, 300);
    }, 3000);
  };

  const handleLoginClick = async () => {
    try {
      if (!inputs.userId || !inputs.userPassword) {
        addNotification("아이디와 비밀번호를 모두 입력해주세요.", false);
        return;
      }

      const response = await login(inputs);
      setIsLoggedIn(true);
      setUserName(response.userName);
      addNotification("로그인에 성공했습니다.", true);
      setTimeout(() => navigate("/"), 1000);
      
    } catch (error) {
      console.error("Login error:", error);
      addNotification("아이디 또는 비밀번호가 올바르지 않습니다.", false);
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
          {notifications.length > 0 && (
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
          )}
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Login;
