import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <DivCont>
      <label htmlFor="text">{props.children}</label>
      <MuiInput
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </DivCont>
  );
};

export default Input;

const MuiInput = styled("input")`
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  width: 340px;
  height: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-top: 8px;
  padding: 5px 10px 5px 18px;
`;

const DivCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
`;
