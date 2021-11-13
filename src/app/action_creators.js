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

export const answerQuestion = (questionId, answer) => {
  // questionData is an object that contains the ID of the answered question
  // as well as the answer the user chose.

  return {
    type: Actions.ANSWER_QUESTION,
    payload: {
      questionId: questionId,
      answer: answer,
    },
  };
};
