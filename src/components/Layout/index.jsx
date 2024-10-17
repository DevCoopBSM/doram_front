import React from 'react';
import UserHeader from '../Header/index';
import { LayoutContainer, ContentContainer } from './style';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <UserHeader />
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
