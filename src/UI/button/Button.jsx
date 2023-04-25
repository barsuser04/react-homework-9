import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <MuiButton disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </MuiButton>
  );
};

const MuiButton = styled("button")`
  margin-right: ${(props) => props.marginRight};
  padding: 18px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #72159e;
  }

  :disabled {
    background-color: #73159eb7;
  }
`;

export default Button;
