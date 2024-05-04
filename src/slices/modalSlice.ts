import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../types/types";

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

const selectModalState = (state: any) => state.modal;

export const selectIsModalOpen = (state: any) => selectModalState(state).isOpen;

export default modalSlice.reducer;
