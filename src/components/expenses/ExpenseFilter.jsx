import React from "react";
import styled from "styled-components";

const ExpenseFilter = (props) => {
  return (
    <ContainerDiv>
      <LabelStyle>Фильтровать по году</LabelStyle>

      <BtnStyle onClick={props.goDown}>По возрастанию</BtnStyle>
      <BtnStyle onClick={props.ascending}>По убыванию</BtnStyle>
      <StyledSelect value={props.selected} onChange={props.getValue}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </StyledSelect>
    </ContainerDiv>
  );
};

export default ExpenseFilter;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const LabelStyle = styled.label`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const StyledSelect = styled.select`
  height: 35px;
  font-size: 20px;
  font-weight: 600;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 10px;
`;

const BtnStyle = styled.button`
  border: 2px solid #000000;
  color: "#fff";
  padding: 9px;
  border-radius: 5px;
  font-weight: 600;

  :hover {
    background-color: #070404b2;
    color: #ffffff;
  }
`;
