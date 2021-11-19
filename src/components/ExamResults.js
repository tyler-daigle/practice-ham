import { connect } from "react-redux";
import Container from "./UI/Container";
import { calculateScore } from "../util/grading";

function ExamResults({ answeredQuestions, examData, answerList, dispatch }) {
  const userScore = calculateScore(examData, answerList, answeredQuestions);

  return (
    <Container>
      <h1>Here are your results for the {examData.examName} test.</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Passing Score</th>
            <th>Your Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Required Correct Answers</td>
            <td>
              {examData.passingScore} out of {examData.numQuestions}
            </td>
            <td>
              {userScore.numCorrect} out of {examData.numQuestions}
            </td>
          </tr>
          <tr>
            <td>Required Passing Percentage</td>
            <td>76%</td>
            <td>{userScore.grade}%</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  answeredQuestions: state.answeredQuestions,
  answerList: state.answerList,
  examData: state.currentExam,
});
export default connect(mapStateToProps)(ExamResults);
