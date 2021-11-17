import { connect } from "react-redux";
import { answerQuestion } from "../app/action_creators";
import styled from "styled-components";
import Question from "./Question";

const QuestionListContainer = styled.div`
  padding: 1rem;
`;

function QuestionList({ questionList, dispatch }) {
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
    </QuestionListContainer>
  );
}

const QuestionListSelector = (state) => ({ questionList: state.questionList });
export default connect(QuestionListSelector)(QuestionList);
