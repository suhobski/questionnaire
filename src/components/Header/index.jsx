import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  cursor: pointer;
`;

const Header = () => {
  let navigate = useNavigate();

  return (
    <header>
      <Title onClick={() => navigate("/")}>Questionnaire</Title>
    </header>
  );
};

export default Header;
