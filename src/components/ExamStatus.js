import { useSelector } from "react-redux";

import styled from "styled-components";
import Container from "./UI/Container";

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

export default function ExamStatus({ currentExam }) {
  const totalQuestions = 35;
  const requiredCorrect = 26;
  const examType = useSelector((state) => state.examType.value);

  return (
    <Container>
      <SectionTitle>You are taking the {examType} Exam.</SectionTitle>
      <p>
        There are {totalQuestions} questions on the {examType} exam. You must
        get {requiredCorrect} questions correct in order to pass.
      </p>

      <p>
        <strong>Click next when you are ready to begin.</strong>
      </p>
    </Container>
  );
}
