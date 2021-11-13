import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentExam, setQuestionList } from "./app/dispatchers";

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

import contentfulClient from "./contentful/contentful";

export default function App() {
  // component state
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState();

  // redux state
  const currentExam = useSelector((state) => state.currentExam);
  const questionList = useSelector((state) => state.questionList);
  const dispatch = useDispatch();

  // const [questionList, setQuestionList] = useState([]);

  /*********************************************************************
   *
   * selectExam()
   *
   * Gets the list of available exams from Contentful and then randomly
   * chooses one of the exams.
   *
   * After getting the ID of the exam it will then get the list of
   * questions for that exam from contentful.
   *
   *********************************************************************/
  // TODO: move all of these functions that use contentful to different file
  // TODO: Add answered questions to redux store.
  const selectExam = async (exam) => {
    // show the loading message
    setLoadingMessage("Generating your exam...");
    setIsLoading(true);

    // set the name of the current exam
    dispatch(setCurrentExam(exam));

    // TODO: add conditional for selecting the questions based on exam
    // name. such as general, technician or extra.

    // randomly select one of the tests and return the list of IDs
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

      // TODO: strip out all the unused fields from Contentful that are in the question objects
      dispatch(setQuestionList(questions));
      setIsLoading(false);
      setCurrentScreen(1);
    } catch (e) {
      console.log(e);
    }
  };

  /*******************************************************************
   *
   * getQuestions() takes an array of question IDs and gets the
   * questions from Contentful. It returns a promise that will resolve
   * to an array of the question objects.
   *
   *******************************************************************/

  const getQuestions = (questions) => {
    return contentfulClient
      .getEntries({
        content_type: "question",
        "fields.question_id[in]": questions.join(","),
      })
      .then((entries) => {
        console.log(entries);
        console.log(`Got ${entries.items.length} questions.`);
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
