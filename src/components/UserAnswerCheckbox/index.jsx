import React, { useContext } from "react";
import { AppContext } from "../../context";
import Label from "../../styles/Label";

const UserAnswerCheckbox = ({ question }) => {
  const { id, answerType, answers: questAnswers, quest } = question;
  const { answers, setAnswers } = useContext(AppContext);
  const isChecked = (item) => !!answers?.[id]?.answer.includes(item);

  const handleRadioChange = (e, answer) => {
    setAnswers((prev) => {
      const checked = e.target.checked;
      const prevQuestionAnswers = prev[id]?.answer || [];
      let newQuestionAnswers;
      if (checked) {
        newQuestionAnswers = [...prevQuestionAnswers, answer];
      } else {
        newQuestionAnswers = prevQuestionAnswers.filter(
          (item) => item.id !== answer.id
        );
      }
      return {
        ...prev,
        [id]: { answer: newQuestionAnswers, answerType, quest },
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
