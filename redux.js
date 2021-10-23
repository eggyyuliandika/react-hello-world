const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17,
};

//reducer : suatu fungsi yang digunakan untuk mengupdate store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };

    default:
      return state;
  }
};

//store : sebuah wadah besar digunakan untuk menyimpan state atau value secara global
const store = createStore(rootReducer);
console.log(store.getState());

//subscription : proses pemanggilan store yang kita perlukan
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

//dispatching action : proses pemanggilan sebuah instruksi yang disediakan oleh reducer
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
