import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #c14953;
  font-size: 5rem;
`;

const Subtitle = styled.h2`
  color: #e5dcc5;
`;

export const Header = () => (
  <header>
    <Title>Quizizz Parser</Title>
    <Subtitle>Get answers for your quiz!</Subtitle>
  </header>
);
