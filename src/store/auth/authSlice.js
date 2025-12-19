import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  currentUser: {},
  authenticating: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      const userWithFlattenedPermissions = {
        ...action.payload,
        roles: action.payload.roles?.flatMap(
          (role) => role.permissions?.map((permission) => permission.name) || []
        ),
      };

      state.currentUser = userWithFlattenedPermissions;
      state.isLogin = true;
      state.authenticating = false;
    },

    updateCurrentUser(state, action) {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload,
      };
    },

    unAuthenticate(state) {
      state.authenticating = false;
      state.isLogin = false;
      state.currentUser = {};
    },

    logout() {
      return initialState;
    },
  },
});

export const { setCurrentUser, updateCurrentUser, unAuthenticate, logout } =
  authSlice.actions;

export default authSlice.reducer;
