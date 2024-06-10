import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { expires_in: null, access_token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { expires_in, access_token } = action.payload;
      state.expires_in = expires_in;
      state.access_token = access_token;
      console.log("Expires: ", expires_in);
      worker.postMessage({ data: expires_in === 3600 ? Date.now() + 3600 * 1000 : expires_in });
    },
    logOut: (state, action) => {
      state.expires_in = null;
      state.access_token = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentTime = (state) => state.auth.expires_in;
export const selectCurrentToken = (state) => state.auth.access_token;
