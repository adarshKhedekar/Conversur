import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  sidebar: { open: boolean; type: string };
}

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
      console.log(state.sidebar.open)
    },
    updateSidebarType(state, action: PayloadAction<any>) {
      state.sidebar.type = action.payload.type;
    },
  },
});
export const { toggleSidebar, updateSidebarType } = slice.actions;
export default slice.reducer;
