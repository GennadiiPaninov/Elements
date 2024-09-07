import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { rootReducers } from '../../../entries/rootReducer/rootReducer'

export const store = configureStore({
  reducer: {
    rootState: rootReducers,
  },
})
type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
