import React from "react";
import Layout from "../Layout/index";
import * as S from "./style";
import userImage from "../../assets/userImage.svg";

const UserInfo = () => {
  return (
    <Layout>
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
      <S.Write></S.Write>
    </Layout>
  );
};

export default UserInfo;
