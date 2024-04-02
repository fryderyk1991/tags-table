import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadData } from "../providers/apiProvider";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  try {
    const response = await loadData();
    return response.items;
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
  reducers: {
    sortTagsNameAlfa(state) {
      const sortedTags = [...state.tags].sort((a, b) => a.name.localeCompare(b.name));
      return {...state, tags: sortedTags}
    },
    sortTagsByCountAsc(state) {
      const sortedTags = [...state.tags].sort((a, b) => a.count - b.count);
      return {...state, tags: sortedTags}
    },
    sortTagsByCountDesc(state) {
      const sortedTags = [...state.tags].sort((a, b) => b.count - a.count);
      return {...state, tags: sortedTags}
    },
    updateArrayLength(state, action) {
      const updateArray = [...state.tags].slice(0, action.payload);
      return {...state, tags: updateArray}
    }
  },
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

export const { sortTagsNameAlfa, sortTagsByCountAsc, sortTagsByCountDesc, updateArrayLength } = tagsSlice.actions

export default tagsSlice.reducer;


