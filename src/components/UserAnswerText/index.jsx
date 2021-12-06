import React, { useContext } from "react";
import { AppContext } from "../../context";
import TextInput from "../../styles/TextInput";

const UserAnswerCheckbox = ({ question }) => {
  const { id, answerType, quest } = question;
  const { answers, setAnswers } = useContext(AppContext);

  const handleInputChange = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [id]: { answer: e.target.value, answerType, quest },
      };
    });
  };

  return (
    <div>
      <TextInput
        value={answers[id]?.answer || ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UserAnswerCheckbox;
