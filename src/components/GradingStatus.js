import styled from "styled-components";

import Container from "./UI/Container";

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 0 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function GradingStatus({ gradeAsYouGo, setGradeAsYouGo }) {
  return (
    <Container>
      <p>
        Would you like to be graded as you go or be graded after you have
        answered all the questions?
      </p>
      <RadioContainer>
        <input
          type="radio"
          name="grade-status"
          value="true"
          checked={gradeAsYouGo === true}
          onChange={() => setGradeAsYouGo(true)}
        />
        <Label onClick={() => setGradeAsYouGo(true)}>
          Grade me as I go. Let me know when an answer is wrong.
        </Label>
      </RadioContainer>

      <RadioContainer>
        <input
          type="radio"
          name="grade-status"
          value="false"
          checked={gradeAsYouGo === false}
          onChange={() => setGradeAsYouGo(false)}
        />
        <Label onClick={() => setGradeAsYouGo(false)}>
          Let me finish the test and then tell me my score.
        </Label>
      </RadioContainer>
    </Container>
  );
}
