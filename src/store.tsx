import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
    useDispatch as reduxUseDispatch,
    useSelector as reduxUseSelector,
    type TypedUseSelectorHook
} from "react-redux"

import Images from "@/features/images/Images"

const root = combineReducers({
    images: Images
})

export const store = configureStore({
    reducer: root
})

type Dispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useDispatch: () => Dispatch = reduxUseDispatch
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector
