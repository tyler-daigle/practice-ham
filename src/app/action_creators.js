import { Contentful } from "../contentful/contentful";
import Actions from "./actions";

export const setQuestionList = (examName) => {
  return async function (dispatch, getState) {
    dispatch(loadingStarted());
    const testChoices = await Contentful.getTestChoices(examName);

    // randomly select one of the returned tests
    const randomTest = Math.floor(testChoices.length * Math.random());

    // need the ID of the exam to get the question list from Contentful
    const examId = testChoices[randomTest].fields.exam_id;

    const ql = await Contentful.getExamQuestionIds(examId);
    // ql is now an array of question IDs that can be grabbed from contentful
    const questionList = await Contentful.getQuestions(ql);

    dispatch({
      type: Actions.QUESTION_LIST_SET,
      payload: questionList,
    });
    dispatch(loadingDone());
    dispatch(nextScreen());
  };
};

export const setCurrentExam = (examName) => {
  return {
    type: Actions.CURRENT_EXAM_CHANGED,
    payload: examName,
  };
};

export const loadingStarted = () => {
  return {
    type: Actions.LOADING_STARTED,
  };
};

export const loadingDone = () => {
  return {
    type: Actions.LOADING_DONE,
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

export const nextScreen = () => {
  return {
    type: Actions.SCREEN_FORWARD,
  };
};

export const prevScreen = () => {
  return {
    type: Actions.SCREEN_PREVIOUS,
  };
};

export const setLoadingMessage = (msg) => {
  return {
    type: Actions.LOADING_MESSAGE_CHANGED,
    payload: msg,
  };
};
