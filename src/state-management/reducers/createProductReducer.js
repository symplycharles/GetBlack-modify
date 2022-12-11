import { ActionTypes } from "../constants/action-types";

const intialState = {
  product: {},
};

export const createProductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.CREATE_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
