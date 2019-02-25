import * as actionsTypes from './actionTypes';

export const updateUser = function (userIdx) {
  return {
    type: actionsTypes.USER_SHOW_DETAILS,
    payload: userIdx
  };
};

export const updateQueryUserList = function (userList) {
  return {
    type: actionsTypes.USER_SEARCH_RESPONSE_FETCHED,
    payload: userList
  };
}

