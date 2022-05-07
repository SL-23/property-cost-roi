import { configureStore } from "@reduxjs/toolkit";
import { calculateDateReducer }  from "./CalculateDateSlice";
import counterReducer  from "../../component/counter/CounterSlice";

const configureAppStore = () => {
  return configureStore({
    // auto call combine reducer
    reducer: {
      calculateDate: calculateDateReducer,
      counter: counterReducer,
    },
  })
}

const store = configureAppStore();
console.log(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;
