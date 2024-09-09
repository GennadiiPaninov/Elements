import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    menuShop: '',
    menuState: '',
  },
  name: 'rootSlice',
  reducers: {
    setMenuShop: (state, action: PayloadAction<{ menuState: string }>) => {
      state.menuShop = action.payload.menuState
    },
    setMenuState: (state, action: PayloadAction<{ menuState: string }>) => {
      state.menuState = action.payload.menuState
    },
  },
})

export const rootReducers = slice.reducer
export const rootActions = slice.actions
