import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  WriteButton,
  UserProfile,
  DropdownMenu,
  DropdownItem,
  AlarmButton,
  LoginButton,
  LoginIcon,
  AlarmDropdown,
  AlarmHeader,
  CloseButton,
  AlarmList,
  AlarmItem,
  AlarmContent,
  AlarmTime,
  DeleteButton,
  NoAlarms,
} from "./style";
import logo from "../../assets/logo.png";
import userImage from "../../assets/userImage.svg";
import alarmIcon from "../../assets/alarm.svg";
import loginLogo from "../../assets/loginLogo.svg";
import closeIcon from "../../assets/close.svg";
import { useAuth } from "../../context/AuthContext";

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, content: "새로운 댓글이 달렸습니다.", time: "1시간 전" },
    { id: 2, content: "회원님의 글에 좋아요가 달렸습니다.", time: "2시간 전" },
    { id: 3, content: "새로운 팔로워가 생겼습니다.", time: "3시간 전" },
  ]);
  const { isLoggedIn, userName: contextUserName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUserName = localStorage.getItem('userName');
        
        if (!token) {
          return;
        }

        if (storedUserName) {
          setUserName(storedUserName);
        }
      } catch (error) {
        console.error('로그인 상태 확인 실패:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
      }
    };
    
    checkLoginStatus();
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsAlarmOpen(false);
  };

  const handleNavigation = (path) => {
    if (path === "/user") {
      const userId = localStorage.getItem('userId');
      if (userId) {
        navigate(`/user/${userId}`);
      } else {
        console.error('사용자 ID를 찾을 수 없습니다.');
        navigate('/login');
      }
    } else {
      navigate(path);
    }
    setIsDropdownOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    if (isLoggedIn) {
      navigate("/write");
    } else {
      navigate("/login");
    }
  };

  const handleAlarmClick = (e) => {
    e.stopPropagation();
    setIsAlarmOpen(!isAlarmOpen);
    setIsDropdownOpen(false);
  };

  const handleNotificationDelete = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAlarmOpen && !event.target.closest('.alarm-dropdown')) {
        setIsAlarmOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isAlarmOpen]);

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" onClick={handleLogoClick} />
      <SearchBar placeholder="검색어를 입력하세요" />
      <WriteButton onClick={handleWriteClick}><b>글 작성</b></WriteButton>
      
      {isLoggedIn ? (
        <>
          
        <UserProfile onClick={handleProfileClick}>
            <img src={userImage} alt="User Profile" />
            <span>{userName || contextUserName}</span>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleNavigation("/savewrite")}>
                  임시 저장 목록
                </DropdownItem>
                <DropdownItem onClick={() => handleNavigation("/user")}>
                  내 정보
                </DropdownItem>
              </DropdownMenu>
            )}
          </UserProfile>
          <AlarmButton onClick={handleAlarmClick}>
            <img src={alarmIcon} alt="Alarm" />
            {isAlarmOpen && (
              <AlarmDropdown className="alarm-dropdown">
                <AlarmHeader>
                  <span>최근에 온 알림</span>
                  <CloseButton onClick={() => setIsAlarmOpen(false)}>
                    닫기
                  </CloseButton>
                </AlarmHeader>
                <AlarmList>
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <AlarmItem key={notif.id}>
                        <AlarmContent>
                          <div>{notif.content}</div>
                          <AlarmTime>{notif.time}</AlarmTime>
                        </AlarmContent>
                        <DeleteButton onClick={() => handleNotificationDelete(notif.id)}>
                          <img src={closeIcon} alt="Delete" />
                        </DeleteButton>
                      </AlarmItem>
                    ))
                  ) : (
                    <NoAlarms>알림이 없습니다.</NoAlarms>
                  )}
                </AlarmList>
              </AlarmDropdown>
            )}
          </AlarmButton>
        </>
      ) : (
        <>
        <LoginButton onClick={() => navigate("/login")}>
          <LoginIcon src={loginLogo} alt="Login" />
          <span>로그인 하기</span>
        </LoginButton>
        </>
      )}
    </HeaderContainer>
  );
};

export default UserHeader;