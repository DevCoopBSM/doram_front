import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, SearchBar, WriteButton, UserProfile, DropdownMenu, DropdownItem, AlarmButton } from './style';
import logo from '../../assets/logo.png';
import userImage from '../../assets/userImage.svg';
import alarmIcon from '../../assets/alarm.svg';

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);  // 메뉴 클릭 후 드롭다운 메뉴를 닫음
  };

  const handleLogoClick = () => {
    navigate('/');  // 메인 페이지로 이동
  };

  const handleWriteClick = () => {
    navigate('/write');
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" onClick={handleLogoClick} />
      <SearchBar placeholder="검색어를 입력하세요" />
      <WriteButton onClick={handleWriteClick}>글 작성</WriteButton>
      <AlarmButton>
        <img src={alarmIcon} alt="Alarm" />
      </AlarmButton>
      <UserProfile onClick={handleProfileClick}>
        <img src={userImage} alt="User Profile" />
        <span>UserName</span>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => handleNavigation('/save')}>임시 저장 목록</DropdownItem>
            <DropdownItem onClick={() => handleNavigation('/user')}>내 정보</DropdownItem>
          </DropdownMenu>
        )}
      </UserProfile>
    </HeaderContainer>
  );
};

export default UserHeader;
