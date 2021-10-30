import React from "react";
import { FlexContainer } from "./components/FlexContainer";
import { Header } from "./components/Header";
import { Form } from "./forms/Form";

export const Main = () => (
  <FlexContainer>
    <Header />
    <Form />
  </FlexContainer>
);
