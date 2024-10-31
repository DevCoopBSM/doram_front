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
} from "./style";
import logo from "../../assets/logo.png";
import userImage from "../../assets/userImage.svg";
import alarmIcon from "../../assets/alarm.svg";
import { useAuth } from "../../context/AuthContext";

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const { isLoggedIn, userName: contextUserName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return;
        }

        const response = await fetch('/api/auth/login', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        });
        
        if (response.status === 403) {
          console.log('인증되지 않은 사용자입니다.');
          return;
        }
        
        const data = await response.json();
        setUserName(data.userName);
      } catch (error) {
        console.error('로그인 상태 확인 실패:', error);
      }
    };
    
    checkLoginStatus();
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
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

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" onClick={handleLogoClick} />
      <SearchBar placeholder="검색어를 입력하세요" />
      <WriteButton onClick={handleWriteClick}>글 작성</WriteButton>
      
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
          <AlarmButton>
            <img src={alarmIcon} alt="Alarm" />
          </AlarmButton>
        </>
      ) : (
        <div onClick={() => navigate("/login")} style={{ cursor: 'pointer' }}>
          로그인
        </div>
      )}
    </HeaderContainer>
  );
};

export default UserHeader;