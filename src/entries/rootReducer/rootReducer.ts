import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    menuState: false,
  },
  name: 'rootSlice',
  reducers: {
    setMenuState: state => {
      state.menuState = !state.menuState
    },
  },
})

export const rootReducers = slice.reducer
export const rootActions = slice.actions
