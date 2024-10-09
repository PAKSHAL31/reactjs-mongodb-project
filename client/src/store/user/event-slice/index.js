import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  eventList: [],
};

// Fetch all events
export const fetchAllFilteredEvents = createAsyncThunk(
  "/events/fetchAllEvents",
  async ({ filterParams, sortParams }) => {
    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });
    const result = await axios.get(`http://localhost:5000/api/user/events/get?${query}`);

    return result?.data;
  }
);

const UserEventsSlice = createSlice({
  name: "userEvents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredEvents.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.eventList = action.payload.data;
      })
      .addCase(fetchAllFilteredEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.eventList = [];
      });
  },
});

export default UserEventsSlice.reducer;
