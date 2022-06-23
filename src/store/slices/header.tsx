import { createSlice } from "@reduxjs/toolkit";

interface StateData {
  page: number;
}

const initialState: StateData = {
  page: 0,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default headerSlice;
