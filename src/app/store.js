import { createStore } from "redux";
import examReducer from "./reducers/examReducer";

/* store for the exam data
{
  currentExam: "name of exam",
  questionList: [], // array of all the questions
  answeredQuestions: [
    {questionId: "T1A0", answer: "C"}
  ]
}
*/

const store = createStore(
  examReducer,
  { currentExam: "", questionList: [], answeredQuestions: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
