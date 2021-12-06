import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserAnswerResult from "../../components/UserAnswerResult";
import { AppContext } from "../../context";
import Button from "../../styles/Button";

const Results = () => {
  const { name, answers, setName, setAnswers, setCurrentQuestionId } = useContext(AppContext);
  const idAnswers = Object.keys(answers);
  let navigate = useNavigate();

  const handleButtonClick = () => {
    setName("");
    setAnswers({});
    setCurrentQuestionId(1);
    navigate("/questionnaire");
  }

  useEffect(() => {
    if (!name) {
      navigate("/questionnaire");
    }
  });

  return (
    <div>
      <h2>Results</h2>
      <p>Name: {name}</p>
      {idAnswers.map((id, index) => (
        <UserAnswerResult answer={answers[id]} index={index + 1} key={id} />
      ))}
      <Button onClick={handleButtonClick}>Home page</Button>
    </div>
  );
};

export default Results;
