import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    categoryState: '',
    menuShop: '',
    menuState: '',
  },
  name: 'rootSlice',
  reducers: {
    setCategory: (state, action: PayloadAction<{ categoryState: string }>) => {
      state.categoryState = action.payload.categoryState
    },
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
