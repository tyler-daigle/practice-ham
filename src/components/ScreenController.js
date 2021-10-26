import styled from "styled-components";
import Button from "./UI/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

export default function ScreenController({
  currentScreen,
  nextScreen,
  prevScreen,
}) {
  return (
    <ButtonContainer>
      <Button onClick={prevScreen}>Prev</Button>
      <Button onClick={nextScreen}>Next</Button>
    </ButtonContainer>
  );
}
