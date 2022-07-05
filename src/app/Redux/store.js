import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todos'
import tabsSlice from './tabs'

export const store = configureStore({
    reducer: {
        todos: todosSlice,
        tabs: tabsSlice
    },
})