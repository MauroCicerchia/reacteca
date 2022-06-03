import { AnyAction, createStore } from "redux";

interface CounterState {
  count: number;
}

const initialState = {
  count: 0,
};

export default createStore(
  (state: CounterState = initialState, action: AnyAction) => {
    switch (action.type) {
      case "counter/increment":
        return {
          ...state,
          count: state.count + 1,
        };
      case "counter/decrement":
        return {
          ...state,
          count: state.count - 1,
        };
      case "counter/set":
        return {
          ...state,
          count: action.payload,
        };
      default:
        return state;
    }
  }
);
