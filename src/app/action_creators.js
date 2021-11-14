import Actions from "./actions";

export const setQuestionList = (questionList) => {
  return {
    type: Actions.QUESTION_LIST_SET,
    payload: questionList,
  };
};

export const setCurrentExam = (examName) => {
  return {
    type: Actions.CURRENT_EXAM_CHANGED,
    payload: examName,
  };
};
