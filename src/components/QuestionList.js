import styled from "styled-components";
import Question from "./Question";

const QuestionListContainer = styled.div`
  padding: 1rem;
`;

export default function QuestionList({ questionList }) {
  return (
    <QuestionListContainer>
      <ol>
        {questionList.map((question) => (
          <li key={question.fields.question_id}>
            <Question question={question.fields} />
          </li>
        ))}
      </ol>
    </QuestionListContainer>
  );
}
