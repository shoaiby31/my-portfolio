import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/theme'

export const store = configureStore({
  reducer: {
    mode: themeSlice,
  },
})