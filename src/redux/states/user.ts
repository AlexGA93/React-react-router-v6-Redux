import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import {
  checkLocalStorage,
  clearLocalStorage,
  persistLocalStorage,
  userKey,
} from "../../utilities/LocalStorage";

export const emptyInitialState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: checkLocalStorage(userKey)
    ? JSON.parse(checkLocalStorage(userKey) as string)
    : emptyInitialState,
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(userKey);
      return emptyInitialState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
