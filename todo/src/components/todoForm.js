import React, { useState, useReducer } from 'react;
import { initialState, todoReducer } from '../reducers'

export const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, { todos: initialState };
    const [todo, addTodo] = useState()

}