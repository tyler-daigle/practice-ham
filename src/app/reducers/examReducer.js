import Actions from "../actions";

function examReducer(state = {}, action) {
  switch (action.type) {
    case Actions.QUESTION_LIST_SET:
      return {
        ...state,
        questionList: action.payload,
      };
    case Actions.CURRENT_EXAM_CHANGED:
      return {
        ...state,
        currentExam: action.payload,
      };

    case Actions.QUESTION_ANSWERED:
      return {
        ...state,
        answeredQuestions: {
          ...state.answeredQuestions,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    default:
      return state;
  }
}

export default examReducer;
