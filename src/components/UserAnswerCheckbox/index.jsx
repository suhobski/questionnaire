import React, { useContext } from "react";
import { AppContext } from "../../context";
import Label from "../../styles/Label";

const UserAnswerCheckbox = ({ question }) => {
  const { id, answerType, answers: questAnswers, quest } = question;
  const { answers, setAnswers } = useContext(AppContext);
  const isChecked = (item) => Boolean(answers?.[id]?.userAnswer.includes(item));

  const handleRadioChange = (e, userAnswer) => {
    setAnswers((prev) => {
      const checked = e.target.checked;
      const prevQuestionAnswers = prev[id]?.userAnswer || [];
      let newQuestionAnswers;
      if (checked) {
        newQuestionAnswers = [...prevQuestionAnswers, userAnswer];
      } else {
        newQuestionAnswers = prevQuestionAnswers.filter(
          (item) => item.id !== userAnswer.id
        );
      }
      return {
        ...prev,
        [id]: { userAnswer: newQuestionAnswers, answerType, quest },
      };
    });
  };

  return (
    <div>
      {questAnswers.map((item) => (
        <Label key={item.id}>
          <input
            type={answerType}
            value={item.answer}
            checked={isChecked(item)}
            onChange={(e) => handleRadioChange(e, item)}
          />
          {item.answer}
        </Label>
      ))}
    </div>
  );
};

export default UserAnswerCheckbox;
