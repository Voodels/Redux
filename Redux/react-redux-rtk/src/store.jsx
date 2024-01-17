import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./reducer";
const store = configureStore({
  //reducer: can give multiple reducers
  reducer: {
    customReducer,
  },
});
export default store;
