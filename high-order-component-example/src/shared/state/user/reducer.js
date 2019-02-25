import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  userList: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_SHOW_DETAILS:
      return {
        ...state,
        user: state.userList[action.payload]
      };
    case actionTypes.USER_SEARCH_RESPONSE_FETCHED:
      return {
        ...state,
        userList: action.payload
      };
    default:
      return state;
  }
};