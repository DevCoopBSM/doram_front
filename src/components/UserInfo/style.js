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
  margin-top: 70px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  margin-bottom: 8px;
  gap: 15px;
`;

export const Name = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const UserEmail = styled.div`
  font-size: 24px;
  color: #666;
`;

export const UserBio = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`;

export const EditButton = styled.button`
  width: 128px;
  height: 46px;
  padding: 10px 24px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
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
  margin-left: 0px;
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
  gap: 45px;
`;
export const WriteCategory = styled.button`
  position: relative;
  width: 341px;
  height: 46px;
  background-color: ${(props) => (props.isActive ? "#8ee559" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  border: none;
`;

export const LikeCategory = styled(WriteCategory)``;
export const SaveCategory = styled(WriteCategory)``;

export const ListSection = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const List = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BookName = styled.div`
  font-size: 24;
  color: black;
`;
export const Reaction = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18;
  color: #cccccc;
`;

export const Like = styled.div``;
export const Chat = styled.div``;

export const Plus = styled.img`
  padding-left: 20px;
  padding-right: 20px;
`;
