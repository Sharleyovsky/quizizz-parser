import React from "react";
import styled from "styled-components";

const AnswerForm = styled.form`
  display: flex;
  align-items: stretch;
`;

const Input = styled.input`
  background: transparent;
  width: 100%;
  padding: 2rem;
  color: #e5dcc5;
  border: none;
`;

const Button = styled.button`
  outline: none;
  color: #e5dcc5;
  background: #848fa5;
  padding: 0.5em 0.75em;
  border: none;
`;

export const Form = () => {
  return (
    <AnswerForm>
      <Input type="text" placeholder="Paste the link for the quiz" />
      <Button>Get Answers</Button>
    </AnswerForm>
  );
};
