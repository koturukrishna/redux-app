import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "krish26",
  initialState: {
    value: 13,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

const { increment } = counterSlice.actions;

const store = configureStore({
  reducer: {
    krish26: counterSlice.reducer,
  },
});

const Krishna = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.krish26.value);
  console.log(count);
  
  console.log("krishna koturu");

  const addig_15 = () => {
    dispatch(increment(16));
  };

  return (
    <div>
      <h6>the value is: {count}</h6>
      <h4>Krishna koturu</h4>
      <button onClick={addig_15}>Add</button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Krishna />
    </Provider>
  );
}
