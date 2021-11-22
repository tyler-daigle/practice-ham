// move app stuff into here
// Redux

import { connect } from "react-redux";
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
import ExamResults from "./components/ExamResults";

function Home({
  currentScreen,
  loadingMessage,
  isLoading,
  currentExam,
  questionList,
  dispatch,
}) {
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
    dispatch(setLoadingMessage("Generating your exam..."));
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
        return <ExamStatus examData={currentExam} />;

      case 2:
        return <Exam examData={currentExam} questionList={questionList} />;

      case 3:
        return <ExamResults />;
      default:
        return <h1>No more screens</h1>;
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
            <h1>{currentExam.examName} Exam</h1>
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
const mapStateToProps = (state) => ({
  currentScreen: state.currentScreen,
  loadingMessage: state.loadingMessage,
  isLoading: state.isLoading,
  currentExam: state.currentExam,
  questionList: state.questionList,
});

const HomeScreen = connect(mapStateToProps)(Home);
export default HomeScreen;
