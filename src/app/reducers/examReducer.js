import Actions from "../actions";

function examReducer(state = {}, action) {
  switch(action.type) {
    case Actions.SET_QUESTION_LIST:
      return {
        ...state,
        questionList: action.payload
      };      
    case Actions.SET_CURRENT_EXAM:
      return {
        ...state,
        currentExam: action.payload
      };
    default:
      return state;
  }
}

export default examReducer;