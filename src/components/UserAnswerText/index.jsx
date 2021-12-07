import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../../context";
import TextInput from "../../styles/TextInput";

const UserAnswerText = ({ question }) => {
  const { id, answerType, quest } = question;
  const { answers, setAnswers } = useContext(AppContext);

  const handleInputChange = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [id]: { userAnswer: e.target.value, answerType, quest },
      };
    });
  };

  return (
    <div>
      <TextInput
        value={answers[id]?.userAnswer || ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

UserAnswerText.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    quest: PropTypes.string,
    answerType: PropTypes.string, 
    answers: PropTypes.string,
  }).isRequired,
}

export default UserAnswerText;
