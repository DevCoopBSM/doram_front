import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1152px;
  padding: 20px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1152px;
  margin: 0 auto;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
`;

export const UserLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const UserName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 8px;
`;

export const UserEmail = styled.span`
  font-size: 16px;
  color: #666;
  margin-right: 20px;
`;

export const UserBio = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`;

export const EditButton = styled.button`
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  width: 450px;
`;

export const FollowerFollowingSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`;

export const FollowerFollowingCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-left: 100px;
  span:first-child {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  span:last-child {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const WriteSection = styled.div`
  margin-top: 50px;
`;
export const Category = styled.div`
  position: absolute;
  display: flex;
`;
export const WriteCategory = styled.button`
  position: relative;
  width: 354px;
  height: 46px;
  background-color: #8ee559;
  border-radius: 0;
  border-radius: 8px 8px 0 0;
`;
export const LikeCategory = styled.button`
  position: relative;
  width: 354px;
  height: 46px;
  background-color: #8ee559;
  border-radius: 0;
  border-radius: 8px 8px 0 0;
`;
export const SaveCategory = styled.button`
  position: relative;
  width: 354px;
  height: 46px;
  background-color: #8ee559;
  border-radius: 0;
  border-radius: 8px 8px 0 0;
`;
