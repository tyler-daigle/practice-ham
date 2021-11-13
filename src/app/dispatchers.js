import Actions from "./actions";

export const setQuestionList = (questionList) => {
  return {
    type: Actions.SET_QUESTION_LIST,
    payload: questionList,
  };
};

export const setCurrentExam = (examName) => {
  return {
    type: Actions.SET_CURRENT_EXAM,
    payload: examName,
  };
};
