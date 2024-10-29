import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import UserHeader from "../Header";
import userImage from "../../assets/userImage.svg";
import plus from "../../assets/plus.svg";

const SaveWrtie = () => {
  const books = [
    { bookname: "너를 사랑하던 어느 날에", like: 108, chat: 3 },
    { bookname: "고양이 뒤를 따라가", like: 72, chat: 12 },
    { bookname: "너의 편두통", like: 1, chat: 0 },
  ];

  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Title>저장된 글 목록</S.Title>
        <S.ListSection>
          {books.map((list, index) => (
            <S.List key={index}>
              <S.BookName>{list.bookname}</S.BookName>
              <S.Reaction>
                <S.Delete>삭제</S.Delete>
              </S.Reaction>
            </S.List>
          ))}
        </S.ListSection>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default SaveWrtie;
