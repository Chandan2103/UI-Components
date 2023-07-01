import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed:false,
  onHover:false,
  dashboard:" ",
  otpFlag:false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    resetaAllProjectDetails: () => initialState,

    setCollapsed(state, action) {
      state.collapsed = action.payload;
    },
    setOnHover(state, action) {
      state.onHover = action.payload;
    },
    setDashboard(state, action) {
      state.dashboard = action.payload;
    },
    setOtpFlag(state,action){
      state.otpFlag = action.payload;
    }
  },
});

export const {
  setCollapsed,
  setOnHover,
  setDashboard,
  setOtpFlag,
}=projectSlice.actions;

export default projectSlice.reducer;