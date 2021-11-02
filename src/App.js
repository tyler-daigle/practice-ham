import { useState, useEffect } from "react";

import AppContainer from "./components/UI/AppContainer";
import MainHeader from "./components/UI/MainHeader";
import PageHeader from "./components/UI/PageHeader";
import CSSVariables from "./components/UI/CSSVariables";
import GlobalStyles from "./components/UI/GlobalStyles";

import ExamSelector from "./components/ExamSelector";
import GradingStatus from "./components/GradingStatus";
import ExamStatus from "./components/ExamStatus";
import ScreenController from "./components/ScreenController";
import Exam from "./components/Exam";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentExam, setCurrentExam] = useState();
  const [gradeAsYouGo, setGradeAsYouGo] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const questions = [
      {
        question_id: 1,
        question_text: "First Question",
        choices: { choices: { a: 1, b: 2, c: 3, d: 4 } },
      },
      {
        question_id: 2,
        question_text: "Second Question",
        choices: { choices: { a: 1, b: 2, c: 3, d: 4 } },
      },
      {
        question_id: 3,
        question_text: "Third Question",
        choices: { choices: { a: 1, b: 2, c: 3, d: 4 } },
      },
      {
        question_id: 4,
        question_text: "Fourth Question",
        choices: { choices: { a: 1, b: 2, c: 3, d: 4 } },
      },
    ];
    setQuestionList(questions);
  }, []);

  // const getQuestion = (questionId) => {
  //   contentfulClient
  //     .getEntries({
  //       content_type: "question",
  //       "fields.question_id": questionId,
  //     })
  //     .then((entries) => {
  //       console.log(entries.items[0].fields);
  //       setCurrentQuestion(entries.items[0].fields);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const selectExam = (exam) => {
    setCurrentExam(exam);
    setCurrentScreen(1);
    // setExamSelected(true);
  };

  const getCurrentScreen = () => {
    switch (currentScreen) {
      case 0:
        return <ExamSelector onExamChange={selectExam} />;
      case 1:
        return (
          <GradingStatus
            gradeAsYouGo={gradeAsYouGo}
            setGradeAsYouGo={setGradeAsYouGo}
          />
        );
      case 2:
        return <ExamStatus currentExam={currentExam} />;

      default:
        if (currentExam === "technician") {
          return <Exam examName={currentExam} questionList={questionList} />;
        } else {
          return <h1>No more screens</h1>;
        }
    }
  };

  return (
    <>
      <GlobalStyles dark />
      <CSSVariables>
        {currentScreen === 0 ? (
          <MainHeader />
        ) : (
          <PageHeader>
            <h1>Page Header</h1>
          </PageHeader>
        )}
        <AppContainer>
          {getCurrentScreen()}
          {currentScreen !== 0 && (
            <ScreenController
              currentScreen={currentScreen}
              nextScreen={() => setCurrentScreen(currentScreen + 1)}
              prevScreen={() => setCurrentScreen(currentScreen - 1)}
            />
          )}
        </AppContainer>
      </CSSVariables>
    </>
  );
}
