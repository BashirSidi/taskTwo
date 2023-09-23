import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface InitialStateType {
  shortenedUrl: string | null;
  loading: boolean;
  error: string | null;
}


const initialState: InitialStateType = {
  shortenedUrl: null,
  loading: false,
  error: null,
} 

export const urlShortener = createAsyncThunk(
  'urlShort/shortener',
  async (url: string, { rejectWithValue }) => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      return res.data.result;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const urlShortenerSlice = createSlice({
  name: "shortener",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(urlShortener.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(urlShortener.fulfilled, (state, action) => {
      state.loading = false;
      state.shortenedUrl = action.payload;
      state.error = null;
    })
    builder.addCase(urlShortener.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  } 
})

export const {} = urlShortenerSlice.actions;
export default urlShortenerSlice.reducer;