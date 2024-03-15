import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./Slices/counterSlice";


export const counterStore = configureStore({
  reducer: {
    counter: CounterSlice
  },
})