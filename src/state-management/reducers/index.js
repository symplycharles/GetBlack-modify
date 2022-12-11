import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/user/authSlice";
import roleReducer from "../../features/roles/rolesSlice";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import {
  categoriesReducer,
  selectedCategoryReducer,
} from "./categoriesReducer";
import { createProductReducer } from "./createProductReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  role: roleReducer,
  allProducts: productsReducer,
  allCategories: categoriesReducer,
  product: selectedProductsReducer,
  category: selectedCategoryReducer,
  createProduct: createProductReducer,
});
