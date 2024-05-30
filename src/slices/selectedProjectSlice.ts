import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../views/HomePage/Portfolio/portfolioList";
import { SelectedProjectState } from "../types/types";

const initialState: SelectedProjectState = {
  project: projects[0],
};

const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.project = action.payload;
    },
  },
});

export const { setSelectedProject } = selectedProjectSlice.actions;

export const selectProject = (state: any) => state.selectedProject;
export const selectSelectedProject = (state: any) =>
  selectProject(state).project;

export default selectedProjectSlice.reducer;
