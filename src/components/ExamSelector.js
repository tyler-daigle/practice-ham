import styled from "styled-components";

import Button from "./UI/Button";
import Container from "./UI/Container";
import ExamTypes from "../util/examTypes";

const PageSubTitle = styled.h2`
  color: var(--primary-text-color);
  text-align: center;
`;

const ExamDescription = styled.p`
  color: var(--primary-text-color);
  font-weight: 300;
  margin-bottom: 1rem;
`;

const ExamTitle = styled.h3`
  color: var(--primary-text-color);
`;

const ExamChoice = ({ children }) => {
  return <Container>{children}</Container>;
};

export default function ExamSelector({ onExamChange }) {
  return (
    <div>
      <PageSubTitle>Choose the exam you want to practice.</PageSubTitle>
      <ExamChoice>
        <ExamTitle>Technician</ExamTitle>
        <ExamDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          fuga numquam eius dolore maiores delectus.
        </ExamDescription>
        <Button size="lg" onClick={() => onExamChange(ExamTypes.TECHNICIAN)}>
          Technician
        </Button>
      </ExamChoice>

      <ExamChoice>
        <ExamTitle>General</ExamTitle>
        <ExamDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          fuga numquam eius dolore.
        </ExamDescription>
        <Button size="lg" onClick={() => onExamChange(ExamTypes.GENERAL)} disabled>
          General
        </Button>
      </ExamChoice>

      <ExamChoice>
        <ExamTitle>Extra</ExamTitle>
        <ExamDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          fuga numquam eius dolore maiores delectus, laudantium nam animi
          tempora minima omnis adipisci recusandae est iure.
        </ExamDescription>
        <Button size="lg" onClick={() => onExamChange(ExamTypes.EXTRA)} disabled>
          Extra
        </Button>
      </ExamChoice>
    </div>
  );
}
