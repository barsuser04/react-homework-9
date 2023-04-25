import React from "react";
import styled from "styled-components";
import Button from "../../UI/button/Button";

const ExpensesCard = ({ el, onDelete }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });
  const dateYear = new Date(el.date).getFullYear().toString();
  const dateDay = new Date(el.date).getDate().toString();

  return (
    <ItemDiv>
      <LeftSide>
        <ParagraphDate>
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <SpanNumber>{+dateDay}</SpanNumber>
        </ParagraphDate>
        <ParagraphTitle>{el.title}</ParagraphTitle>
      </LeftSide>
      <ParagraphPrice>{el.price} сом</ParagraphPrice>
      <Button onClick={() => onDelete(el.id)}>Удалить </Button>
    </ItemDiv>
  );
};

export default ExpensesCard;

const ItemDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 15px;
  width: 96%;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ParagraphDate = styled.div`
  text-align: center;
  color: #ffffff;
  box-sizing: border-box;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const SpanNumber = styled.span`
  font-size: 23px;
  font-weight: 700;
`;

const ParagraphTitle = styled.p`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

const ParagraphPrice = styled.p`
  width: 90px;
  background-color: #40005d;
  border: 2px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;