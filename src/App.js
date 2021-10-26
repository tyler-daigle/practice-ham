import { useState } from "react";

import AppContainer from "./components/UI/AppContainer";
import MainHeader from "./components/UI/MainHeader";
import PageHeader from "./components/UI/PageHeader";
import CSSVariables from "./components/UI/CSSVariables";
import GlobalStyles from "./components/UI/GlobalStyles";

import ExamSelector from "./components/ExamSelector";
import GradingStatus from "./components/GradingStatus";
import ExamStatus from "./components/ExamStatus";
import ScreenController from "./components/ScreenController";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentExam, setCurrentExam] = useState();
  const [gradeAsYouGo, setGradeAsYouGo] = useState(false);

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
