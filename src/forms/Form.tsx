import React from "react";
import styled from "styled-components";

const AnswerForm = styled.form`
  display: flex;
  align-items: stretch;
`;

const Input = styled.input`
  background: #848FA5;
  width: 100%;
  padding: 2rem;
  color: #e5dcc5;
  border: solid #848FA5;
  border-radius: 25px 0px 0px 25px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e5dcc5;
  }
  :-ms-input-placeholder {
    color: #e5dcc5;
  }
`;

const Button = styled.button`
  outline: none;
  color: #e5dcc5;
  background: #C14953;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 0px 25px 25px 0px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:focus {
   outline: none;
  }
`;

export const Form = () => {
  return (
    <AnswerForm>
      <Input type="text" placeholder="Paste the link for the quiz" />
      <Button>Get Answers</Button>
    </AnswerForm>
  );
};
