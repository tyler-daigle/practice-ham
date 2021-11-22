import Container from "./UI/Container";
import QuestionList from "./QuestionList";

export default function Exam({ examData, questionList }) {
  const { examName } = examData;
  return (
    <>
      <Container>
        <QuestionList questionList={questionList} />
      </Container>
    </>
  );
}
