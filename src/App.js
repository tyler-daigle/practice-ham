import { useState, useEffect } from "react";

import AppContainer from "./components/UI/AppContainer";
import MainHeader from "./components/UI/MainHeader";
import PageHeader from "./components/UI/PageHeader";
import CSSVariables from "./components/UI/CSSVariables";
import GlobalStyles from "./components/UI/GlobalStyles";

import ExamSelector from "./components/ExamSelector";
import ExamStatus from "./components/ExamStatus";
import ScreenController from "./components/ScreenController";
import Exam from "./components/Exam";
import LoadingModal from "./components/LoadingModal";

import testExamData from "./contentful/example_test";
import contentfulClient from "./contentful/contentful";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentExam, setCurrentExam] = useState();
  const [gradeAsYouGo, setGradeAsYouGo] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestions();
  }, []);

  const selectExam = (exam) => {
    // set the loading message

    // set the name of the current exam
    // grab the questions from contentful
    // randomly select one of the tests

    setCurrentExam(exam);
    setCurrentScreen(1);
  };

  const getQuestions = (questionList) => {
    const questions = questionList || testExamData;

    // contentfulClient
    //   .getEntries({
    //     content_type: "question",
    //     "fields.question_id[in]": questions.join(","),
    //   })
    //   .then((entries) => {
    //     console.log(entries);
    //     console.log(`Got ${entries.items.length} questions.`);
    //     setQuestionList(entries.items);
    //   })
    //   .catch((e) => console.log(e));
  };

  // getCurrentScreen() is a simple router that just returns
  // the component based on the value of currentScreen.
  const getCurrentScreen = () => {
    switch (currentScreen) {
      case 0:
        return <ExamSelector onExamChange={selectExam} />;

      case 1:
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
          {isLoading && <LoadingModal />}
        </AppContainer>
      </CSSVariables>
    </>
  );
}
