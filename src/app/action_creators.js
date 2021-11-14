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

export const answerQuestion = (questionId, answer) => {
  // questionData is an object that contains the ID of the answered question
  // as well as the answer the user chose.

  return {
    type: Actions.QUESTION_ANSWERED,
    payload: {
      questionId: questionId,
      answer: answer,
    },
  };
};
