import PropTypes from "prop-types";
import styled from "styled-components";

const QuestionOL = styled.ol`
  margin-left: 1rem;
`;

const QuestionListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const QuestionText = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

export default function Question({ question, onAnswerChange }) {
  const { question_id: questionId, question_text: questionText } = question;

  const actualChoices = question.choices.choices; // error in the object format from Contentful

  const choices = Object.keys(actualChoices).map((choice) => {
    const c = `${actualChoices[choice]}`;
    return c;
  });

  const chars = ["A", "B", "C", "D"];

  return (
    <div>
      <QuestionText>{questionText}</QuestionText>
      <QuestionOL>
        {choices.map((choice, idx) => (
          <QuestionListItem key={`${questionId + choice}`}>
            <input
              type="radio"
              name={questionId}
              value={chars[idx]}
              onChange={() => onAnswerChange(questionId, chars[idx])}
            />
            <span>{choice}</span>
          </QuestionListItem>
        ))}
      </QuestionOL>
    </div>
  );
}

Question.propTypes = {
  questionId: PropTypes.string,
  questionText: PropTypes.string,
};
