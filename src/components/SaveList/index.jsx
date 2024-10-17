import React from 'react';
import UserHeader from '../Header';
import { PageContainer, SaveListContainer } from './style';

const SaveList = () => {
  return (
    <PageContainer>
      <UserHeader />
      <SaveListContainer>
        {/* 임시 저장 목록의 나머지 내용 */}
      </SaveListContainer>
    </PageContainer>
  );
};

export default SaveList;
