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

    case Actions.LOADING_DONE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case Actions.LOADING_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case Actions.LOADING_MESSAGE_CHANGED: {
      return {
        ...state,
        loadingMessage: action.payload,
      };
    }

    case Actions.SCREEN_FORWARD: {
      return {
        ...state,
        currentScreen: state.currentScreen + 1,
      };
    }

    case Actions.SCREEN_PREVIOUS: {
      return {
        ...state,
        currentScreen: state.currentScreen - 1,
      };
    }

    case Actions.ANSWER_LIST_SET: {
      return {
        ...state,
        answerList: { ...action.payload },
      };
    }
    default:
      return state;
  }
}

export default examReducer;
