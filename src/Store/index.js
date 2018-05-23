import { createStore } from "redux";
import questionsApp from "./reducers";

import { changeActive } from "./actions";

import { hydrateLocalStorage } from "./helpers";

const store = createStore(
  questionsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function checkActiveQuestion(store) {
  const id = store.questions.activeQuestion.id;
  let ok = false;
  store.questions.questions.map(q => {
    if (q.question.id === id) ok = true;
  });

  if (!ok) {
    store.dispatch(
      changeActive({
        question: "No questions",
        answer: "Add a question below."
      })
    );
  }
}

store.subscribe(() => {
  const s = store.getState();
  // checkActiveQuestion(s);
  hydrateLocalStorage(s);
});

export default store;
