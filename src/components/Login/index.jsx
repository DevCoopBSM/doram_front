import React from "react";
import * as S from "./style";
import UserHeader from "../Header";
import logo from "../../assets/doram.svg";

const Modify = () => {
  return (
    <S.LayoutContainer>
      <UserHeader />
      <S.ContentContainer>
        <S.Logo src={logo} aly="logo" />
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default Modify;
