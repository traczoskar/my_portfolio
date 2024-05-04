import { createSlice } from "@reduxjs/toolkit";
import { ProjectDetailsState } from "../types/types";

const initialState: ProjectDetailsState = {
  isOpen: false,
  currentProjectId: null,
};

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    openProjectDetails: (state, action) => {
      state.isOpen = true;
      state.currentProjectId = action.payload;
    },
    closeProjectDetails: (state) => {
      state.isOpen = false;
      state.currentProjectId = null;
    },
  },
});

export const { openProjectDetails, closeProjectDetails } =
  projectDetailsSlice.actions;

export const selectProjectDetailsState = (state: any) => state.projectDetails;
export const selectIsProjectDetailsOpen = (state: any) =>
  selectProjectDetailsState(state).isOpen;
export const selectCurrentProjectId = (state: any) =>
  selectProjectDetailsState(state).currentProjectId;

export default projectDetailsSlice.reducer;
