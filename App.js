import React, {Component} from 'react';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {applyMiddleware, createStore} from 'redux';
import RootReducer from "./src/main/RootReducer";
import RootNavigator from "./src/main/RootNavigator";
import fetchUserPosts from 'feeds/FeedService';
import {fetchPostsPending} from "feeds/FeedActions";

const loggerMiddleware = createLogger();

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
store.dispatch(fetchPostsPending());
store.dispatch(fetchUserPosts()).then(() => console.log(store.getState()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}