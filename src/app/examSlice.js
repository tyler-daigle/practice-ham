import { createSlice } from "@reduxjs/toolkit";

export const examSlice = createSlice({
  name: "examType",
  initialState: {
    value: "Technician",
  },
  reducers: {
    setExam: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setExam } = examSlice.actions;
export default examSlice.reducer;
