import React, { useState } from "react";
import ExpensesCard from "../Card/ExpensesCard";
import ExpenseFilter from "./ExpenseFilter";
import styled from "styled-components";

const Expenses = (props) => {
  const { data, setNewProduct } = props;
  const [selectedYear, setSelectedYear] = useState("2023");

  function getSelectValue(event) {
    setSelectedYear(event.target.value);
  }

  const filteredYear = data.filter((el) => {
    return new Date(el.date).getFullYear().toString() === selectedYear;
  });

  console.log("data", data);

  const descending = () => {
    const dd = filteredYear.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    console.log("dd", dd);
    setNewProduct(dd);
  };

  const ascending = () => {
    const dd = filteredYear.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setNewProduct(dd);
  };

  return (
    <DivItem>
      <ExpenseFilter
        ascending={ascending}
        goDown={descending}
        getValue={getSelectValue}
      />

      {filteredYear.map((el) => {
        return <ExpensesCard key={el.id} el={el} onDelete={props.onDelete} />;
      })}
    </DivItem>
  );
};

export default Expenses;

const DivItem = styled.div`
  width: 100%;
  padding: 30px 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #1f1f1f;
`;
