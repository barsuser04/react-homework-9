import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

const Header = ({ showUsers, showExpenses, isLogin, logOutHandler }) => {
  return (
    <>
    <HeaderDiv>
      {isLogin && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: "20px",
            width: "20%",
          }}
        >
          <Button onClick={showExpenses}>Expenses</Button>
          <Button onClick={showUsers}>Users</Button>
          <Button onClick={logOutHandler}>Log Out</Button>
        </div>
      )}

    </HeaderDiv>
     
      </>
  );
};

export default Header;

const HeaderDiv = styled.div`
  background-color: #035c4f;
  width: 97.5%;
  padding: 25px 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
