// Chapter - 1
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };
// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerHTML = countStore.getState();
// };

// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: "ADD" });
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: "MINUS" });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// Chapter - 2
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ui = document.querySelector("ui");

const ADD_TODO = "ADD_TODO";
const DELETE_TODE = "DELETE_TODE";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    case DELETE_TODE:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
