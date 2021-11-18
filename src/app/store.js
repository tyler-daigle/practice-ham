import { createStore, applyMiddleware, compose } from "redux";
import examReducer from "./reducers/examReducer";
import thunk from "redux-thunk";

/* store for the exam data
{
  currentExam: "name of exam",
  questionList: [], // array of all the questions
  answeredQuestions: { // object with question IDs as keys and answers as property
    TC1A0: "C",
    TC1A1: "B"
  }
  
}
*/

const store = createStore(
  examReducer,
  {
    currentExam: "",
    questionList: [],
    answeredQuestions: [],
    isLoading: false,
    currentScreen: 0,
    loadingMessage: "",
  },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
