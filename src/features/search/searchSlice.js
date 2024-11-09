import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchResults } from './searchAPI';

const initialState = {
  query: '',
  results: [],
  page: 0,
  totalPages: 0,
  status: 'idle',
};

export const fetchResults = createAsyncThunk(
  'search/fetchResults',
  async ({ query, page }) => {
    const response = await fetchSearchResults(query, page);
    return response;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 0;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload.hits;
        state.totalPages = action.payload.nbPages;
      })
      .addCase(fetchResults.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setQuery, setPage } = searchSlice.actions;
export default searchSlice.reducer;
