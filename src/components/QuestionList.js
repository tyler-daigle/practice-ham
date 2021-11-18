import { connect } from "react-redux";
import { answerQuestion, nextScreen } from "../app/action_creators";
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

function QuestionList({
  questionList,
  answeredQuestions,
  answerList,
  dispatch,
}) {
  // handler for when an answer is selected
  const onAnswerChange = (questionId, val) => {
    if (answerList[questionId] === val) {
      console.log("Answer Correct");
    } else {
      console.log("Answer incorrect.");
    }
    dispatch(answerQuestion(questionId, val));
  };

  const onSubmitAnswers = () => {
    // make sure all the questions have been answered
    if (Object.keys(answeredQuestions).length !== questionList.length) {
      console.log("Not all questions have been answered");
    } else {
      console.log("All questions are answered");
    }

    // dispatch for testing next screen
    dispatch(nextScreen());
    // if they have advance to the next screen
    // if not tell the user and let them answer the questions, or else mark them wrong
  };

  // TODO: Add a prop to Question for the currently selected answer
  return (
    <QuestionListContainer>
      <ol>
        {questionList.map((question) => (
          <li key={question.question_id}>
            <Question question={question} onAnswerChange={onAnswerChange} />
          </li>
        ))}
      </ol>
      <SubmitTestContainer>
        <Button type="button" onClick={onSubmitAnswers}>
          Submit Test
        </Button>
      </SubmitTestContainer>
    </QuestionListContainer>
  );
}

const QuestionListSelector = (state) => ({
  answeredQuestions: state.answeredQuestions,
  answerList: state.answerList,
});
export default connect(QuestionListSelector)(QuestionList);
