import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice"


const store = configureStore({
  reducer: {
          counterReducer,
  },
})

export default store