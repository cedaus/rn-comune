import React, {Component} from 'react';
import RootNavigator from "./src/main/RootNavigator";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {feedReducer} from "reducers/FeedReducer";

const rootReducer = combineReducers({
  posts: feedReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}