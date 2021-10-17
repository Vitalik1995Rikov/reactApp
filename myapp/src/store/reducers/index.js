import { combineReducers } from "redux";
import products from "./products";

// Собираем все редьюсеры в единый
export default combineReducers({
  products,
});