import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    value: [],
    /*
    todo structure: 
    {
      id: number,
      text: string,
      isDone: boolean
    }
    */
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push({
                id: uuidv4(),
                text: action.payload,
                isDone: false
            })
        },
        CompleteTodo: (state, action) => {
            const index = state.value.findIndex(todo => todo?.id === action.payload?.id)
            if (index !== -1) {
                state.value[index]['isDone'] = !state.value[index]['isDone'];
            }
        },
        removeTodo: (state, action) => {
            const index = state.value.findIndex(todo => todo?.id === action.payload?.id)
            if (index !== -1) {
                state.value.splice(index, 1);
            }
        },
        removeAllTodos: (state) => {
            state.value = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, CompleteTodo, removeAllTodos, removeTodo } = todosSlice.actions

export default todosSlice.reducer