import styled from "styled-components";
import { keyframes } from "styled-components";

const Modal = styled.div`
  background-color: white;
  color: var(--primary-text-color);
  box-shadow: 4px 4px 15px black; /*var(--primary-text-color);*/
  padding: 1rem;
  border-radius: 12px;

  min-height: 150px;
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

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: solid 5px black;
  margin: 0 auto;
  border-radius: 100%;
  animation: ${progressAnimation} 1s infinite alternate-reverse;
`;

export default function LoadingModal() {
  return (
    <Modal>
      <LoadingText>Loading something...</LoadingText>
      <Spinner />
    </Modal>
  );
}
