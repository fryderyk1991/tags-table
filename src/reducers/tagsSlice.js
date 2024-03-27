import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadData } from "../providers/apiProvider";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  try {
    const response = await loadData();
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch tags: ${error.message}`);
  }
});

const initialState = {
  tags: [],
  loading: false,
  error: null,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
