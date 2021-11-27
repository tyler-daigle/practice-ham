import { useState } from "react";
import { connect } from "react-redux";
import { answerQuestion, nextScreen } from "../app/action_creators";
import Question from "./Question";

import styled from "styled-components";
import Button from "./UI/Button";

const QuestionListContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const QuestionDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px var(--secondary-text-color);
`;

// const SectionDetailsContainer = styled.div`
//   border-bottom: solid 2px var(--secondary-text-color);
//   margin-bottom: 1rem;
// `;

function QuestionList({
  questionList,
  answeredQuestions,
  answerList,
  dispatch,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const numQuestions = questionList.length;

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  // handler for when an answer is selected
  const onAnswerChange = (questionId, val) => {
    // TODO: Add option to check answers as you go
    // if (answerList[questionId] === val) {
    //   console.log("Answer Correct");
    // } else {
    //   console.log("Answer incorrect.");
    // }
    dispatch(answerQuestion(questionId, val));
  };

  const onSubmitAnswers = () => {
    // make sure all the questions have been answered
    if (Object.keys(answeredQuestions).length !== questionList.length) {
      console.log("Not all questions have been answered");
    } else {
      console.log("All questions are answered");
    }

    // dispatch for testing next screen
    dispatch(nextScreen());
    // if they have advance to the next screen
    // if not tell the user and let them answer the questions, or else mark them wrong
  };

  return (
    <QuestionListContainer>
      {/* <SectionDetailsContainer>
        <span>
          <strong>Section A1</strong>
        </span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          doloremque eos non?
        </p>
      </SectionDetailsContainer> */}
      <QuestionDetailsContainer>
        <span className="blueText">
          [{questionList[currentQuestion].question_id}]
        </span>
        <span className="blueText">
          <strong>
            Question {currentQuestion + 1} of {numQuestions}
          </strong>
        </span>
      </QuestionDetailsContainer>
      <Question
        question={questionList[currentQuestion]}
        onAnswerChange={onAnswerChange}
      />

      {currentQuestion === numQuestions - 1 ? (
        <ButtonContainer>
          <Button type="button">Prev</Button>
          <Button type="button" onClick={onSubmitAnswers}>
            Submit Test
          </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button
            type="button"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            Prev
          </Button>

          <Button type="button" onClick={nextQuestion}>
            Next
          </Button>
        </ButtonContainer>
      )}
    </QuestionListContainer>
  );
}

const QuestionListSelector = (state) => ({
  answeredQuestions: state.answeredQuestions,
  answerList: state.answerList,
});
export default connect(QuestionListSelector)(QuestionList);
