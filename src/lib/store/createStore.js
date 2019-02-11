import { createStore } from 'redux'

import {todoReducer} from '../../Todo/reducers/todoReducer';

export const store = createStore(todoReducer);
// Optional - you can pass `initialState` as a second arg
// let store = createStore(counter, { value: 0 })