import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../../styles/Button";
import { AppContext } from "../../context";
import Wrap from "../Greeting/Wrap";
import UserAnswerRadio from "../../components/UserAnswerRadio";

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

  const currentQuestion = questions.find(
    (item) => item.id === currentQuestionId
  );

  const buttonValue =
    currentQuestionId === questions.length ? nameFinishButton : nameNextButton;

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  });
  console.log(`answers`, answers);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      {currentQuestion.answerType === "radio" && (
        <UserAnswerRadio question={currentQuestion} />
      )}
      {/* {answerType === 'checkbox' && <UserAnswerCheckbox />} */}
      {/* {answerType === 'text' && <UserAnswerText />} */}

      {/* <TextInput
        value={answers[currentQuestionId] || ""}
        onChange={handleInputChange}
      /> */}
      <Button>{buttonValue}</Button>
    </Wrap>
  );
};

export default Test;
