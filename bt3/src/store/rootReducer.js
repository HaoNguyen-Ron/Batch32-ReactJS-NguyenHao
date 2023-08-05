import { combineReducers } from 'redux';
import todoReducer from './todolist/reducer'

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
    todoReducer,
});

export default rootReducer;