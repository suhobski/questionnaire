import React, { useContext } from "react";
import { AppContext } from "../../context";
import Label from "../../styles/Label";

const UserAnswerRadio = ({ question }) => {
  const { id, answerType, answers: questAnswers, quest } = question;
  const { answers, setAnswers } = useContext(AppContext);

  const handleRadioChange = (e, userAnswer) => {
    setAnswers((prev) => {
      return { ...prev, [id]: { userAnswer, answerType, quest } };
    });
  };

  return (
    <div>
      {questAnswers.map((item) => (
        <Label key={item.id}>
          <input
            type={answerType}
            value={item.answer}
            checked={answers[id]?.userAnswer.id === item.id}
            onChange={(e) => handleRadioChange(e, item)}
          />
          {item.answer}
        </Label>
      ))}
    </div>
  );
};

export default UserAnswerRadio;
