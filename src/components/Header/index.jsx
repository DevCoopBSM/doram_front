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

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (response.status === 403) {
          console.log('인증되지 않은 사용자입니다.');
          setIsLoggedIn(false);
          return;
        }
        
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
        setUserId(data.userId);
      } catch (error) {
        console.error('Failed to fetch user status:', error);
        setIsLoggedIn(false);
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
            <span>{userId}</span>
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
