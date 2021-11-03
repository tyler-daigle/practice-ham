import PropTypes from "prop-types";
import styled from "styled-components";

const QuestionOL = styled.ol`
  margin-left: 1rem;
`;

const QuestionListItem = styled.li`
  list-style-type: upper-alpha;
`;

const QuestionText = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

export default function Question({ question }) {
  const { question_id: questionId, question_text: questionText } = question;
  console.log(question);
  const actualChoices = question.choices.choices; // error in the object format

  const choices = Object.keys(actualChoices).map((choice) => {
    const c = `${actualChoices[choice]}`;
    return c;
  });

  return (
    <div>
      <QuestionText>{questionText}</QuestionText>
      <QuestionOL>
        {choices.map((choice) => (
          <QuestionListItem key={`${questionId + choice}`}>
            {choice}
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
