import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  width: 600px;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  border: 4px solid #0eb400;
  background: #fff;
  color: black;
  font-size: 18px;
  font-weight: 700;
  padding-left: 30px;
  margin: 0 20px;
`;

export const WriteButton = styled.button`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 45px;
  margin-right: 30px;
  border-radius: 8px;
  background: var(--Primary, #8ee559);
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Positioning context for the dropdown */

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }

  span {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px; /* Adjust based on the UserProfile height */
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  align-self: stretch;
  border: 1px solid #ccc;
  background: #fff;
  color: var(--Black, #000);
  font-family: "NanumSquare Neo OTF";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AlarmButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;
