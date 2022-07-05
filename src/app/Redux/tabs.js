import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ['All', 'Active', 'Completed'],
    activeTab: JSON.parse(localStorage.getItem('tab')) || 0
}

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.activeTab = action.payload
            localStorage.setItem('tab', state.activeTab)
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeTab } = tabsSlice.actions

export default tabsSlice.reducer