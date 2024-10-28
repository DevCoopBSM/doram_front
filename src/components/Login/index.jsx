import React from "react";
import * as S from "./style";
import UserHeader from "../Header";
import logo from "../../assets/doram.png";

const Modify = () => {
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Contain>
          <S.Logo src={logo} aly="logo" />
          <S.Text>회원가입 후 도람의 더 다양한 서비스를 만나보세요!</S.Text>
        </S.Contain>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Modify;
