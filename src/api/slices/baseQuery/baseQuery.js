import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { selectCurrentToken } from "../authSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://smartsistem.az",
  prepareHeaders: (headers, { getState }) => {
    const token = selectCurrentToken(getState());

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
  },
});
