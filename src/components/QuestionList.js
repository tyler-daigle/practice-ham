import { connect } from "react-redux";
import { answerQuestion } from "../app/action_creators";
import Question from "./Question";

import styled from "styled-components";
import Button from "./UI/Button";

const QuestionListContainer = styled.div`
  padding: 1rem;
`;

const SubmitTestContainer = styled.div`
  padding-top: 1rem;
  border-top: solid 1px black;
`;

function QuestionList({ questionList, answeredQuestions, dispatch }) {
  // handler for when an answer is selected
  const onAnswerChange = (questionId, val) => {
    dispatch(answerQuestion(questionId, val));
  };

  // TODO: Add a prop to Question for the currently selected answer
  return (
    <QuestionListContainer>
      <ol>
        {questionList.map((question) => (
          <li key={question.fields.question_id}>
            <Question
              question={question.fields}
              onAnswerChange={onAnswerChange}
            />
          </li>
        ))}
      </ol>
      <SubmitTestContainer>
        <Button type="button">Submit Test</Button>
      </SubmitTestContainer>
    </QuestionListContainer>
  );
}

const QuestionListSelector = (state) => ({
  answeredQuestions: state.answeredQuestions,
});
export default connect(QuestionListSelector)(QuestionList);
