import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpensesForm from "./ExpensesForm";
import styled from "styled-components";

const NewExpense = ({ addExpenseHandler }) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }

  return (
    <DivStyled>
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          addExpenseHandler={addExpenseHandler}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}
    </DivStyled>
  );
};

export default NewExpense;

const DivStyled = styled.div`
  background-color: #ad9be9;
  width: 97%;
  padding: 30px;
  border-radius: 20px;
  margin-top: 30px;
`;
