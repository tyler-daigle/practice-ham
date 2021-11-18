import Container from "./UI/Container";
import QuestionList from "./QuestionList";

export default function Exam({ examData, questionList }) {
  const { examName } = examData;
  return (
    <Container>
      <h2>{examName} Exam</h2>
      <QuestionList questionList={questionList} />
    </Container>
  );
}
