import { createStore, combineReducers } from "redux";
import { commentsArrayReducer } from "./redux/reducer";
import {reducer as formReducer} from 'redux-form';

const reducers = {
    commentsArrayReducer : commentsArrayReducer,
    form : formReducer,
};

const reducer = combineReducers(reducers);

export const store = createStore(reducer);

