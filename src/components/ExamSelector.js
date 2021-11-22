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
          The entry-level license, known as <strong>Technician Class</strong>,
          is awarded after an applicant successfully completes a 35-question
          multiple choice written examination. The license grants full operating
          privileges on all amateur bands above 30 MHz and limited privileges in
          portions of the high frequency (HF) bands.
        </ExamDescription>
        <Button size="lg" onClick={() => onExamChange(ExamTypes.TECHNICIAN)}>
          Technician
        </Button>
      </ExamChoice>

      <ExamChoice>
        <ExamTitle>General</ExamTitle>
        <ExamDescription>
          The middle level, known as <strong>General Class</strong>, requires
          passage of the Technician test, as well as a 35-question
          multiple-choice General exam. General class licensees are granted
          privileges on portions of all amateur bands, and have access to over
          83% of all amateur HF bandwidth. However some band segments often used
          for long distance contacts are not included.
        </ExamDescription>
        <Button
          size="lg"
          onClick={() => onExamChange(ExamTypes.GENERAL)}
          disabled
        >
          General
        </Button>
      </ExamChoice>

      <ExamChoice>
        <ExamTitle>Extra</ExamTitle>
        <ExamDescription>
          The top US license class is <strong>Amateur Extra Class</strong>. This
          license requires the same tests as General plus a 50-question
          multiple-choice theory exam. Those with Amateur Extra licenses are
          granted all privileges on all US amateur bands.
        </ExamDescription>
        <Button
          size="lg"
          onClick={() => onExamChange(ExamTypes.EXTRA)}
          disabled
        >
          Extra
        </Button>
      </ExamChoice>
    </div>
  );
}
