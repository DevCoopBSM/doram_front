import React from "react";
import * as S from "./style";
import UserHeader from "../Header";
import userImage from "../../assets/userImage.svg";

const UserInfo = () => {
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.UserSection>
          <S.UserLogo src={userImage} alt="User Logo" />
          <S.UserDetails>
            <S.UserName>
              UserName <S.UserEmail>user@example.com</S.UserEmail>
            </S.UserName>
            <S.UserBio>유저 소개 텍스트를 여기에 표시합니다.</S.UserBio>
          </S.UserDetails>
          <S.EditButton>프로필 수정</S.EditButton>
          <S.FollowerFollowingSection>
            <S.FollowerFollowingCount>
              <span>팔로워</span>
              <span>123</span>
            </S.FollowerFollowingCount>
            <S.FollowerFollowingCount>
              <span>팔로잉</span>
              <span>430</span>
            </S.FollowerFollowingCount>
          </S.FollowerFollowingSection>
        </S.UserSection>
        <S.WriteSection>
          <S.Category>
            <S.WriteCategory>내가 쓴 글</S.WriteCategory>
            <S.LikeCategory>내가 좋아한 글</S.LikeCategory>
            <S.SaveCategory>저장된 글</S.SaveCategory>
          </S.Category>
        </S.WriteSection>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default UserInfo;
