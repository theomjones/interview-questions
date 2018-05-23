import { combineReducers, createStore } from "redux";
import { getLocalStorage } from "./helpers";

// Actions
import {
  ADD_QUESTION,
  UPDATE_SEARCH,
  DELETE_QUESTION,
  CHANGE_ACTIVE
} from "./actions";

// initial state
const initialState = {
  questions: getLocalStorage().questions.questions,
  activeQuestion: {
    question: "",
    answer: "Select a question on the left or add one below."
  }
};

const initialFilterState = {
  searchValue: ""
};

const filters = (state = initialFilterState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return Object.assign({}, state, {
        searchValue: action.value
      });
    default:
      return state;
  }
};

// Reducers -- How state chages
function questions(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          { question: action.question, answer: action.answer, id: action.id }
        ]
      });
    case DELETE_QUESTION:
      return Object.assign({}, state, {
        questions: state.questions.filter(q => q.id !== action.id)
      });
    case CHANGE_ACTIVE:
      return Object.assign({}, state, {
        activeQuestion: action.question
      });
    default:
      return state;
  }
}

const questionsApp = combineReducers({
  questions,
  filters
});

export default questionsApp;
