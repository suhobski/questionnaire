import React from "react";
import PropTypes from 'prop-types';
import AnswerWrap from "./AnswerWrap";
import ListItem from "./ListItem";
import Question from "./Question";

const UserAnswerResult = ({ answer, index }) => {
  const { userAnswer, answerType, quest } = answer;

  const PrintUserAnswer = () => {
    if (answerType === "checkbox") {
      return (
        <ul>
          {userAnswer.map((answ) => (
            <ListItem key={answ.id}>{answ.answer}</ListItem>
          ))}
        </ul>
      );
    }
    if (answerType === "radio") {
      return <p>{userAnswer.answer}</p>;
    }
    if (answerType === "text") {
      return <p>{userAnswer}</p>;
    }
  };

  return (
    <AnswerWrap>
      <Question>
        {index}. {quest}
      </Question>
      <PrintUserAnswer />
    </AnswerWrap>
  );
};

UserAnswerResult.propTypes = {
  answer: PropTypes.shape({
    userAnswer: PropTypes.any,
    answerType: PropTypes.string, 
    quest: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default UserAnswerResult;
