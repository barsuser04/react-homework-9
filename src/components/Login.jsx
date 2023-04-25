import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = () => {
    props.onLogin();
  };

  return (
    <>
      <LoginContainer>
        <div>
          <InputForm onSubmit={submitHandler}>
            <InputLabel>
              <label htmlFor="email">E -mail </label>
              <input
                id="email"
                type="email"
                placeholder="enter your email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                style={
                  emailIsValid === false ? { backgroundColor: "red" } : null
                }
              />
            </InputLabel>

            <InputLabel>
              <label htmlFor="password">пароль</label>
              <input
                id="password"
                type="password"
                placeholder="enter your password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                style={
                  passwordIsValid === false ? { backgroundColor: "red" } : null
                }
              />
            </InputLabel>
          </InputForm>
        </div>
        <Button onClick={submitHandler} disabled={!formIsValid}>
          Login
        </Button>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  width: 50%;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  gap: 50px;

  box-shadow: -1px 2px 30px 3px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -1px 2px 30px 3px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -1px 2px 30px 3px rgba(0, 0, 0, 0.69);
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  input {
    width: 700px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid gray;
  }
`;

const InputLabel = styled.div`
  display: flex;
  /* padding: 10px; */
  label {
    margin-right: 8px;
  }
`;

export default Login;
