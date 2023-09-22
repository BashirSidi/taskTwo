import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UrlObject {
  url: string;
}

interface initialStateType {
  urls: UrlObject[];
}

const initialState = {
  urls: [{url: 'www.google.com'}]
} as initialStateType

export const urlShortenerSlice = createSlice({
  name: "urlShortener",
  initialState,
  reducers: {
    getUrls: () => {
      return initialState
    }
  }
})

export const {getUrls} = urlShortenerSlice.actions;
export default urlShortenerSlice.reducer;