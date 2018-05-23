export const getLocalStorage = () => {
  const store = window.localStorage.getItem("store");
  if (store) {
    return JSON.parse(store);
  } else {
    return {
      questions: {
        questions: [],
        activeQuestion: {
          question: "Add a new question to begin.",
          answer: "You can access all your questions in the menu on the left.",
        },
      },
      filters: { searchValue: "" },
    };
  }
};

export const hydrateLocalStorage = store => {
  window.localStorage.setItem("store", JSON.stringify(store));
};
