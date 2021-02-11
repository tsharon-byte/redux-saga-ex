export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const LOAD_DATA = "LOAD_DATA";
export const PUT_DATA = "PUT_DATA";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};
export const putData = (data) => {
  return {
    type: PUT_DATA,
    data,
  };
};
