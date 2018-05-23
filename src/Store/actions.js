// Actions
export const ADD_QUESTION = "ADD_QUESTION";

export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const CHANGE_ACTIVE = "CHANGE_ACTIVE";

export const DELETE_QUESTION = "DELETE_QUESTION";

import uuid from "uuid/v1";

// Action Creators
export function addQuestion({ question, answer }) {
  return {
    type: ADD_QUESTION,
    question,
    answer,
    id: uuid(),
  };
}

export function deleteQuestion({ id }) {
  return {
    type: DELETE_QUESTION,
    id,
  };
}

export function updateSearch(value) {
  return {
    type: UPDATE_SEARCH,
    value,
  };
}

export const changeActive = question => {
  return {
    type: CHANGE_ACTIVE,
    question,
  };
};
