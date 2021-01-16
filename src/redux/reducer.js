import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { createForms } from 'react-redux-form';
import { InitialContactForm } from './forms';

const dishReducer = (dishState = { isLoading: false, dishes: [], errMsg: null }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMsg: null
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload,
                errMsg: null
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMsg: action.payload,
                dishes: []
            }
        default:
            return dishState
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }

        default:
            return commentState
    }
}


export default combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
});
