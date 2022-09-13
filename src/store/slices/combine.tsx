import { createSlice } from "@reduxjs/toolkit";

interface StateData {
  combine: string[];
  sequence: number;
}

const initialState: StateData = {
  combine: [],
  sequence: 0,
};
const combineSlice = createSlice({
  name: "combine",
  initialState,
  reducers: {
    setCombine(state, action) {
      state.combine = action.payload;
    },
    setSequence(state, action) {
      state.sequence = action.payload;
    },
    setReset(state) {
      state.combine = [];
      state.sequence = 0;
    },
  },
  extraReducers: (builder) => {},
});

export default combineSlice;
