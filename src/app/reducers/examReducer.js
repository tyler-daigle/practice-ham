import Actions from "../actions";

function examReducer(state = {}, action) {
  switch (action.type) {
    case Actions.SET_QUESTION_LIST:
      return {
        ...state,
        questionList: action.payload,
      };
    case Actions.SET_CURRENT_EXAM:
      return {
        ...state,
        currentExam: action.payload,
      };

    // TODO: When answering a question the array will have to be searched to find if the question has already been
    // answered and the value just needs to be changed.
    case Actions.ANSWER_QUESTION:
      return {
        ...state,
        answeredQuestions: [...state.answeredQuestions, action.payload],
      };
    default:
      return state;
  }
}

export default examReducer;
