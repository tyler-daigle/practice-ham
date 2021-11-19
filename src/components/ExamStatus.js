import styled from "styled-components";
import Container from "./UI/Container";

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

export default function ExamStatus({ examData }) {
  const { examName, numQuestions, passingScore } = examData;

  return (
    <Container>
      <SectionTitle>You are taking the {examName} Exam.</SectionTitle>
      <p>
        There are {numQuestions} questions on the {examName} exam. You must get{" "}
        {passingScore} questions correct in order to pass.
      </p>

      <p>
        <strong>Click next when you are ready to begin.</strong>
      </p>
    </Container>
  );
}
