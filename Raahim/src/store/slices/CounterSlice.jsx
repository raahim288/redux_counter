import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.counter = ++state.counter;
    },
   subtract: (state, action) => {
      state.counter = state.counter > 0 ? --state.counter : 0;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { add, subtract } = actions;

export default reducer;