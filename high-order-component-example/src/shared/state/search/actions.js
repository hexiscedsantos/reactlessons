import * as actionTypes from './actionTypes';
import { actions as userActions } from '../user';
import * as selectors from './selectors';
import userApi from '../../../fetch/fetchUser';

export const doSearch = (searchInput) => {
  return {
    type: actionTypes.SEARCH_UPDATED,
    payload: searchInput
  };
}

export const submitSearch = () => {
  return async (dispatch, getState) => {
    const searchUserQuery = selectors.getSearchUserQuery(getState());
    const response = await userApi.queryUsers(searchUserQuery);
    return dispatch(userActions.updateQueryUserList(response.data.items));
  }
}