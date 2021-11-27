import { Contentful } from "../contentful/contentful";
import Actions from "./actions";
import ExamTypes from "../util/examTypes";

export const setQuestionList = () => {
  return async function (dispatch, getState) {
    const currentExam = getState().currentExam;
    const examName = currentExam.examName;
    console.log("EXAM:", currentExam);
    dispatch(loadingStarted());

    let licenseClass = "";

    switch (examName) {
      case ExamTypes.EXTRA:
        licenseClass = "Extra";
        break;
      default:
        licenseClass = examName;
    }

    const testChoices = await Contentful.getTestChoices(licenseClass);

    // randomly select one of the returned tests
    const randomTest = Math.floor(testChoices.length * Math.random());

    // need the ID of the exam to get the question list from Contentful
    const examId = testChoices[randomTest].fields.exam_id;

    const ql = await Contentful.getExamQuestionIds(examId);
    // ql is now an array of question IDs that can be grabbed from contentful
    let questionList = await Contentful.getQuestions(ql);

    // strip out all the contentful stuff not needed
    questionList = questionList.map((question) => {
      return { ...question.fields };
    });

    // generate the answer list
    // answerList { "QuestionID" : "Correct Answer"};

    const answerList = {};
    questionList.forEach((question) => {
      answerList[question.question_id] = question.answer;
    });
    console.log(answerList);

    dispatch({
      type: Actions.QUESTION_LIST_SET,
      payload: questionList,
    });

    dispatch({
      type: Actions.ANSWER_LIST_SET,
      payload: answerList,
    });

    dispatch(loadingDone());
    dispatch(nextScreen());
  };
};

// TODO: It would make more sense if examName was changed to examType - it's not really just a string anymore
export const setCurrentExam = (examName) => {
  const examData = {};

  switch (examName) {
    case ExamTypes.TECHNICIAN:
      examData.examName = ExamTypes.TECHNICIAN;
      examData.numQuestions = 35;
      examData.passingScore = 26;
      break;
    case ExamTypes.GENERAL:
      examData.examName = ExamTypes.GENERAL;
      examData.numQuestions = 35;
      examData.passingScore = 26;
      break;
    case ExamTypes.EXTRA:
      examData.examName = ExamTypes.EXTRA;
      examData.numQuestions = 50;
      examData.passingScore = 37;
      break;
    default:
      break;
  }

  return {
    type: Actions.CURRENT_EXAM_CHANGED,
    payload: examData,
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

export const resetApp = () => {
  return {
    type: Actions.APP_RESET,
  };
};
