import * as actionTypes from './actionTypes';

const initialState = "";

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SEARCH_UPDATED:
            return action.payload;
        default:
            return state;
    }
};