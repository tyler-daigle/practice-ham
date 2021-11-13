import { useDispatch } from "react-redux";
import { answerQuestion } from "../app/action_creators";
import styled from "styled-components";
import Question from "./Question";

const QuestionListContainer = styled.div`
  padding: 1rem;
`;

export default function QuestionList({ questionList }) {
  const dispatch = useDispatch();

  const onAnswerChange = (questionId, val) => {
    dispatch(answerQuestion(questionId, val));
  };

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
