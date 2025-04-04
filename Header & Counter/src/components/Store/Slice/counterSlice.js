import { createSlice } from "@reduxjs/toolkit"


const initialState = {
          counter: 0,
}

const counterSlice = createSlice({
          name : "counter",
          initialState: initialState,
          reducers: {
              addCounter: (state)=>{
                    console.log("add counter call", state.counter);
                    state.counter = ++state.counter;
              }, 
              minusCounter: (state)=>{
                    state.counter = state.counter > 0 ? --state.counter : 0;
              }, 
          }
})

const { actions, reducer } = counterSlice;

export const { addCounter, minusCounter } = actions;

export default reducer;