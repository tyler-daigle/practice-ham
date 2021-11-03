import styled from "styled-components";
import { keyframes } from "styled-components";

const Modal = styled.div`
  background-color: white;
  color: var(--primary-text-color);
  box-shadow: 4px 4px 15px black; /*var(--primary-text-color);*/
  padding: 1rem;
  border-radius: 12px;

  min-height: 80px;
  border: solid 1px #e4e4e4;
  width: 50%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;

const LoadingText = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

const progressAnimation = keyframes`
  from {
    transform: scale(5%);
  }

  to {
    transform: scale(120%);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  /* border: solid 1px black; */
  margin-right: 10px;
  border-radius: 100%;
  animation: ${progressAnimation} 0.5s infinite alternate-reverse;
  animation-delay: ${(props) => `${props.interval}s`};
  display: inline-block;
  background-color: ${(props) => props.backgroundColor || "black"};
`;

export default function LoadingModal({ loadingMessage }) {
  return (
    <Modal>
      <LoadingText>{loadingMessage}</LoadingText>
      <SpinnerContainer>
        <Spinner interval={0} backgroundColor="blue" />
        <Spinner interval={0.25} backgroundColor="red" />
        <Spinner interval={0.5} backgroundColor="green" />
      </SpinnerContainer>
    </Modal>
  );
}
