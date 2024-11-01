import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import UserHeader from "../Header";
import { getUserProfile } from "../../api/userApi";

const UserInfo = () => {
  const [activeCategory, setActiveCategory] = useState("write");
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem('userId'); // 또는 다른 방법으로 userId 가져오기
        const profileData = await getUserProfile(userId);
        setUserProfile(profileData);
      } catch (error) {
        console.error('프로필 로딩 실패:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const goToModify = () => {
    navigate("/modify");
  };

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.UserSection>
          <S.UserLogo 
            src={userProfile?.userImage ? `data:image/jpeg;base64,${userProfile.userImage}` : defaultUserImage} 
            alt="User Logo" 
          />
          <S.UserDetails>
            <S.UserName>
              <S.Name>{userProfile?.userName}</S.Name>
              <S.UserEmail>{userProfile?.userEmail}</S.UserEmail>
              <S.EditButton onClick={goToModify}>프로필 수정</S.EditButton>
            </S.UserName>
            <S.UserBio>{userProfile?.userIntroduce}</S.UserBio>
          </S.UserDetails>
          <S.FollowerFollowingSection>
            <S.FollowerFollowingCount>
              <span>팔로워</span>
              <S.Num>{userProfile?.followerCount || 0}</S.Num>
            </S.FollowerFollowingCount>
            <S.FollowerFollowingCount>
              <span>팔로잉</span>
              <S.Num>{userProfile?.followingCount || 0}</S.Num>
            </S.FollowerFollowingCount>
          </S.FollowerFollowingSection>
        </S.UserSection>

        <S.WriteSection>
          <S.Category>
            <S.WriteCategory
              isActive={activeCategory === "write"}
              onClick={() => handleCategoryClick("write")}
            >
              내가 쓴 글
            </S.WriteCategory>
            <S.LikeCategory
              isActive={activeCategory === "like"}
              onClick={() => handleCategoryClick("like")}
            >
              내가 좋아한 글
            </S.LikeCategory>
            <S.SaveCategory
              isActive={activeCategory === "save"}
              onClick={() => handleCategoryClick("save")}
            >
              저장된 글
            </S.SaveCategory>
          </S.Category>
        </S.WriteSection>

        <S.ListSection>
          {books.map((list, index) => (
            <S.List key={index}>
              <S.BookName>{list.bookname}</S.BookName>
              <S.Reaction>
                <S.Like>좋아요 {list.like}</S.Like>
                <S.Chat> 댓글 {list.chat}</S.Chat>
                <S.Plus src={plus} alt="plus" />
              </S.Reaction>
            </S.List>
          ))}
        </S.ListSection>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default UserInfo;
