import { React, useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/doram.png";
import { signup } from "../../api/authApi";
import * as N from '../../styles/NotificationStyle';

const Account = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const addNotification = (message, isSuccess) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, isSuccess }]);

    // 3초 후에 알림 제거
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, isExiting: true }
            : notification
        )
      );
      
      // 애니메이션 완료 후 실제 제거
      setTimeout(() => {
        setNotifications(prev => 
          prev.filter(notification => notification.id !== id)
        );
        if (isSuccess) {
          navigate("/login");
        }
      }, 500);
    }, 3000);
  };

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
      addNotification(response.message, true);
    } catch (error) {
      addNotification("회원가입에 실패했습니다.", false);
    }
  };

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Logo src={logo} alt="logo" />
          <S.Text>회원가입 후 더 다양한 서비스를 만나보세요!</S.Text>
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
          
          <S.AccountBtn onClick={handleSignUpClick}>회원가입하기</S.AccountBtn>
          <S.LoginSection>
            <S.Text2>만약 계정이 있다면?</S.Text2>
            <S.Login onClick={() => navigate("/login")}>로그인하기</S.Login>
          </S.LoginSection>

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
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Account;
