import React, { useState } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAnswersFile } from "../functions/getAnswersFile";
import { ClipLoader } from "react-spinners";

const AnswerForm = styled.form`
  display: flex;
  align-items: stretch;
`;

const Input = styled.input`
  background: #848fa5;
  width: 100%;
  padding: 2rem;
  color: #e5dcc5;
  border: solid #848fa5;
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
  background: #c14953;
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

type Inputs = {
  id: string;
};

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const id = data.id.split("/quiz/")[1].split("/start")[0];
    setLoading(true);
    await getAnswersFile(id, setLoading);
  };

  return (
    <AnswerForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Paste the link for the quiz"
        {...register("id", { required: true })}
      />
      <Button>
        {loading ? <ClipLoader color={"#e5dcc5"} /> : "Get Answers"}
      </Button>
    </AnswerForm>
  );
};
