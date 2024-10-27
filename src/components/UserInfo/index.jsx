import React, { useState } from "react";
import * as S from "./style";
import UserHeader from "../Header";
import userImage from "../../assets/userImage.svg";
import plus from "../../assets/plus.svg";

const UserInfo = () => {
  const [activeCategory, setActiveCategory] = useState("write");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const WriteBooks = [
    { bookname: "너를 사랑하던 어느 날에", like: 108, chat: 3 },
    { bookname: "고양이 뒤를 따라가", like: 72, chat: 12 },
    { bookname: "너의 편두통", like: 1, chat: 0 },
  ];
  const LikeBooks = [
    { bookname: "우리가 빛의 속도로 갈 수 없다면", like: 203, chat: 12 },
    { bookname: "데미안", like: 324, chat: 83 },
    { bookname: "오늘의 날씨", like: 123, chat: 32 },
  ];
  const SaveBooks = [
    { bookname: "제인에어", like: 982, chat: 143 },
    { bookname: "사라진 모든 것들에게", like: 93, chat: 38 },
    { bookname: "밤편지", like: 599, chat: 93 },
  ];

  const books =
    activeCategory === "write"
      ? WriteBooks
      : activeCategory === "like"
      ? LikeBooks
      : SaveBooks;

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.UserSection>
          <S.UserLogo src={userImage} alt="User Logo" />
          <S.UserDetails>
            <S.UserName>
              <S.Name> UserName</S.Name>
              <S.UserEmail>user@example.com</S.UserEmail>
              <S.EditButton>프로필 수정</S.EditButton>
            </S.UserName>
            <S.UserBio>유저 소개 텍스트를 여기에 표시합니다.</S.UserBio>
          </S.UserDetails>

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
