import { useState } from "react";

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

// import testExamData from "./contentful/example_test";
import contentfulClient from "./contentful/contentful";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentExam, setCurrentExam] = useState();
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState();

  const selectExam = async (exam) => {
    // show the loading message
    setLoadingMessage("Generating your exam...");
    setIsLoading(true);

    // set the name of the current exam
    setCurrentExam(exam);

    // randomly select one of the tests
    const testChoices = await contentfulClient
      .getEntries({
        content_type: "exam",
        select: "fields.exam_id",
      })
      .then((entries) => entries.items);

    const randomTest = Math.floor(testChoices.length * Math.random());
    const examId = testChoices[randomTest].fields.exam_id;

    // now get the actual list of questions
    const ql = await contentfulClient
      .getEntries({
        content_type: "exam",
        "fields.exam_id": examId,
        select: "fields.question_list",
      })
      .then((entries) => entries.items[0].fields.question_list);

    // ql is now an array of question IDs that can be grabbed from contentful

    try {
      // grab the questions from contentful
      const questions = await getQuestions(ql);

      // set questionList which is the list of questions that
      // will be sent to the Exam component.
      setQuestionList(questions);
      setIsLoading(false);
      setCurrentScreen(1);
    } catch (e) {
      console.log(e);
    }
  };

  const getQuestions = (questions) => {
    return contentfulClient
      .getEntries({
        content_type: "question",
        "fields.question_id[in]": questions.join(","),
      })
      .then((entries) => {
        console.log(entries);
        console.log(`Got ${entries.items.length} questions.`);
        setQuestionList(entries.items);
        return entries.items;
      })
      .catch((e) => console.log(e));
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
          {currentScreen === 1 && (
            <ScreenController
              currentScreen={currentScreen}
              nextScreen={() => setCurrentScreen(currentScreen + 1)}
              prevScreen={() => setCurrentScreen(currentScreen - 1)}
            />
          )}
          {isLoading && <LoadingModal loadingMessage={loadingMessage} />}
        </AppContainer>
      </CSSVariables>
    </>
  );
}
