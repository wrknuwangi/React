import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editingUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: Date.now(), ...action.payload });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
    setEditUser: (state, action) => {
      state.editingUser = action.payload;
    },
    updateUser: (state, action) => {
      state.users = state.users.map(u =>
        u.id === action.payload.id ? action.payload : u
      );
      state.editingUser = null;
    },
  },
});

export const {
  addUser,
  deleteUser,
  setEditUser,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;
