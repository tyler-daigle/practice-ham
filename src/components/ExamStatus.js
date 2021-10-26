import styled from "styled-components";
import Container from "./UI/Container";

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

export default function ExamStatus({ currentExam }) {
  const totalQuestions = 40;
  const requiredCorrect = 30;

  return (
    <Container>
      <SectionTitle>You are taking the {currentExam} Exam.</SectionTitle>
      <p>
        There are {totalQuestions} questions on the {currentExam} exam. You must
        get {requiredCorrect} questions correct in order to pass.
      </p>

      <p>
        <strong>Click next when you are ready to begin.</strong>
      </p>
    </Container>
  );
}
