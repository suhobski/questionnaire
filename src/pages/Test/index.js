import React, { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import Button from "../../styles/Button";
import { AppContext } from "../../context";
import Wrap from "../Greeting/Wrap";
import UserAnswerRadio from "../../components/UserAnswerRadio";
import UserAnswerCheckbox from "../../components/UserAnswerCheckbox";
import UserAnswerText from "../../components/UserAnswerText";

const Test = () => {
  const {
    name,
    answers,
    nameNextButton,
    nameFinishButton,
    questions,
    currentQuestionId,
    setCurrentQuestionId,
  } = useContext(AppContext);
  let navigate = useNavigate();

  const currentQuestion = useMemo(() => {
    return questions.find((item) => item.id === currentQuestionId);
  }, [questions, currentQuestionId]);

  const inputType = useMemo(() => {
    switch (currentQuestion.answerType) {
      case "radio":
        return <UserAnswerRadio question={currentQuestion} />;
      case "checkbox":
        return <UserAnswerCheckbox question={currentQuestion} />;
      case "text":
        return <UserAnswerText question={currentQuestion} />;
      default:
        return null;
    }
  }, [currentQuestion]);

  const buttonValue =
    currentQuestionId === questions.length ? nameFinishButton : nameNextButton;

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answers[currentQuestionId]) {
      return;
    }

    if (currentQuestionId === questions.length) {
      navigate("/results");
    } else {
      setCurrentQuestionId(currentQuestionId + 1);
    }
  };

  return (
    <Wrap onSubmit={handleSubmit}>
      <h3>Опрос проходит: {name}</h3>
      <p>{currentQuestion.quest}</p>
      {inputType}
      <Button>{buttonValue}</Button>
    </Wrap>
  );
};

export default Test;
