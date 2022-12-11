import { ActionTypes } from "../constants/action-types";

export const createProduct = (product) => {
  return {
    type: ActionTypes.CREATE_PRODUCT,
    payload: product,
  };
};
