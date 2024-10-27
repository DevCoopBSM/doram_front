import React from "react";
import Layout from "../Layout/index";
import {
  UserSection,
  UserLogo,
  UserDetails,
  UserName,
  UserEmail,
  UserBio,
  EditButton,
  FollowerFollowingSection,
  FollowerFollowingCount,
} from "./style";
import userImage from "../../assets/userImage.svg";

const UserInfo = () => {
  return (
    <Layout>
      <UserSection>
        <UserLogo src={userImage} alt="User Logo" />
        <UserDetails>
          <UserName>
            UserName <UserEmail>user@example.com</UserEmail>{" "}
          </UserName>
          <UserBio>유저 소개 텍스트를 여기에 표시합니다.</UserBio>
        </UserDetails>
        <EditButton>프로필 수정</EditButton>
        <FollowerFollowingSection>
          <FollowerFollowingCount>
            <span>팔로워</span>
            <span>123</span>
          </FollowerFollowingCount>
          <FollowerFollowingCount>
            <span>팔로잉</span>
            <span>430</span>
          </FollowerFollowingCount>
        </FollowerFollowingSection>
      </UserSection>
    </Layout>
  );
};

export default UserInfo;
