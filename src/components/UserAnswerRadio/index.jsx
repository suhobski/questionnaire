import React, { useContext } from "react";
import { AppContext } from "../../context";
import Label from "../../styles/Label";

const UserAnswerRadio = ({ question }) => {
  const { id, answerType, answers: questAnswers } = question;
  const { answers, setAnswers } = useContext(AppContext);

  const handleRadioChange = (e, answer) => {
    setAnswers((prev) => {
      return { ...prev, [id]: { ...answer } };
    });
  };

  return (
    <div>
      {questAnswers.map((item) => (
        <Label key={item.id}>
          <input
            type={answerType}
            value={item.answer}
            checked={answers[id]?.["id"] === item.id}
            onChange={(e) => handleRadioChange(e, item)}
          />
          {item.answer}
        </Label>
      ))}
    </div>
  );
};

export default UserAnswerRadio;
