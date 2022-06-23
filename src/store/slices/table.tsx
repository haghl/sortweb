import { createSlice } from "@reduxjs/toolkit";

interface StateData {
  header: string[];
  area: string[];
  sequence: number;
}

const initialState: StateData = {
  header: [],
  area: [],
  sequence: 0,
};
const tableSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSequence(state, action) {
      state.sequence = action.payload;
    },

    setHeader(state, action) {
      state.header = action.payload;
    },

    setArea(state, action) {
      state.area = action.payload;
    },

    setReset(state, action) {
      state.header = [];
      state.area = [];
      state.sequence = 0;
    },
  },
  extraReducers: (builder) => {},
});

export default tableSlice;
