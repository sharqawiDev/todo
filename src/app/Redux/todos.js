import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    value: JSON.parse(localStorage.getItem('todos')) || [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.unshift({
                id: uuidv4(),
                text: action.payload,
                isDone: false
            })
            localStorage.setItem('todos', JSON.stringify(state.value))
        },
        completeTodo: (state, action) => {
            const index = state.value.findIndex(todo => todo?.id === action.payload?.id)
            if (index !== -1) {
                state.value[index]['isDone'] = !state.value[index]['isDone'];
            }
            localStorage.setItem('todos', JSON.stringify(state.value))
        },
        removeTodo: (state, action) => {
            const index = state.value.findIndex(todo => todo?.id === action.payload?.id)
            if (index !== -1) {
                state.value.splice(index, 1);
            }
            localStorage.setItem('todos', JSON.stringify(state.value))
        },
        removeCompletedTodos: (state) => {
            state.value = state.value.filter(todo => !todo.isDone)
            localStorage.setItem('todos', JSON.stringify(state.value))
        },
        removeAllTodos: (state) => {
            state.value = []
            localStorage.setItem('todos', JSON.stringify(state.value))
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, completeTodo, removeCompletedTodos, removeAllTodos, removeTodo } = todosSlice.actions

export default todosSlice.reducer