import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context";
import Title from "./Title";

const Header = () => {
  const { setName, setAnswers, setCurrentQuestionId } = useContext(AppContext);
  let navigate = useNavigate();

  const titleClick = () => {
    setName("");
    setAnswers({});
    setCurrentQuestionId(1);
    navigate("/questionnaire");
  };
  
  return (
    <header>
      <Title onClick={titleClick}>Questionnaire</Title>
    </header>
  );
};

export default Header;
