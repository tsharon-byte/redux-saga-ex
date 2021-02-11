import { DECREMENT, INCREMENT, LOAD_DATA, PUT_DATA } from "../actions/auth";

const initialState = {
  counter: 0,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case LOAD_DATA:
      return { ...state, counter: 0 };
    case PUT_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
