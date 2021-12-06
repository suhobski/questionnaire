import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserAnswerResult from "../../components/UserAnswerResult";
import { AppContext } from "../../context";

const Results = () => {
  const { name, answers } = useContext(AppContext);
  const idAnswers = Object.keys(answers);
  let navigate = useNavigate();

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
    </div>
  );
};

export default Results;
