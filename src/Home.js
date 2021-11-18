// move app stuff into here
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  nextScreen,
  prevScreen,
  setCurrentExam,
  setQuestionList,
  setLoadingMessage,
} from "./app/action_creators";

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

export default function Home() {
  // redux state
  const currentScreen = useSelector((state) => state.currentScreen);
  const loadingMessage = useSelector((state) => state.loadingMessage);
  const isLoading = useSelector((state) => state.isLoading);
  const currentExam = useSelector((state) => state.currentExam);
  const questionList = useSelector((state) => state.questionList);

  const dispatch = useDispatch();

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

  const selectExam = async (exam) => {
    // show the loading message

    // TODO: move this state into redux
    dispatch(setLoadingMessage("Generating your exam..."));

    // set the name of the current exam
    dispatch(setCurrentExam(exam));

    // TODO: add conditional for selecting the questions based on exam
    // name. such as general, technician or extra.

    dispatch(setQuestionList(currentExam));
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
  // TODO: create another component, something like <Home> and use that to connect redux rather
  // than having everything in <App>
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
              nextScreen={() => dispatch(nextScreen())}
              prevScreen={() => dispatch(prevScreen())}
            />
          )}
          {isLoading && <LoadingModal loadingMessage={loadingMessage} />}
        </AppContainer>
      </CSSVariables>
    </>
  );
}
