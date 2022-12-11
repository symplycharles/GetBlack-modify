import { ActionTypes } from '../constants/action-types';

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories
  };
};

export const selectedCategory = (categories) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: categories
  };
};
export const removeSelectedCategory = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CATEGORY
  };
};
