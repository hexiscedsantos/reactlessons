import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import routes from './routeConfig';
import userReducer from './shared/state/user';
import searchReducer from './shared/state/search';

const store = createStore(combineReducers(
  {
    user: userReducer,
    search: searchReducer
  }), applyMiddleware(thunk));

export default function App(props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {renderRoutes(routes)}
      </Provider>
    </BrowserRouter>);
};