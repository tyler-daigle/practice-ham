import Container from "./UI/Container";
import Button from "./UI/Button";
import { connect } from "react-redux";
import { resetApp } from "../app/action_creators";
import { calculateScore } from "../util/grading";
import styled from "styled-components";
import happyGuy from "../images/success_icon.png";
const ResultsContainer = styled.div`
  width: 100%;
`;

const ResultsMessage = styled.h2`
  color: ${(props) => (props.color ? props.color : "black")}; //#3c6e71;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const StatusMessage = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3c6e71;
  text-align: center;
  margin-bottom: 1rem;
`;

const ResultsText = styled.p`
  font-size: ${(props) => props.fontSize || "1.2rem"};
  color: var(--primary-text-color);
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin: 1rem auto;
  width: ${(props) => props.width || "100%"};
`;

const Image = styled.img`
  display: block;
  margin: 1rem auto;
`;

const LinkList = styled.ul`
  list-style-type: none;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const LinkListItem = styled.li`
  padding: 0;
`;

const Link = styled.a`
  color: #3c6e71;
  text-decoration: none;
  &:visited {
    color: #3c6e71;
  }
`;

function ExamResults({ answeredQuestions, examData, answerList, dispatch }) {
  const userScore = calculateScore(examData, answerList, answeredQuestions);
  const status = userScore.pass
    ? "Congratulations!"
    : "Don't give up. Keep studying and try again.";

  const scoreString = userScore.passing
    ? `You have a passing score of ${userScore.grade}%!`
    : `Your score was ${userScore.grade}%.`;

  return (
    <Container>
      <ResultsContainer>
        <ResultsMessage>Your Results</ResultsMessage>
        <StatusMessage>{status}</StatusMessage>
        <ResultsText center={true}>
          You got <strong>{userScore.numCorrect}</strong> questions correct out
          of <strong>{examData.numQuestions}</strong> questions total.
        </ResultsText>

        <ResultsText center={true}>
          To pass the exam you must score 75% or higher.{" "}
          <strong>{scoreString}</strong>
        </ResultsText>

        <Image
          src={happyGuy}
          height="179"
          width="97"
          alt="Happy looking teacher guy."
        />

        <ResultsText fontSize="1rem" width="90%">
          Keep practicing or sign up for the real thing. Here are some links
          that you might find useful:
        </ResultsText>

        <LinkList>
          <LinkListItem>
            <Link href="#">FCC Amateur Radio Website</Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="#">Amateur Radio Test Location Listings</Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="#">Amateur Radio Clubs</Link>
          </LinkListItem>
        </LinkList>
        <Button
          type="button"
          display="block"
          width="100%"
          onClick={() => dispatch(resetApp())}
        >
          Practice Again
        </Button>
      </ResultsContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  answeredQuestions: state.answeredQuestions,
  answerList: state.answerList,
  examData: state.currentExam,
});
export default connect(mapStateToProps)(ExamResults);
