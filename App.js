import React, {Component} from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from "./src/main/RootReducer";
import RootNavigator from "./src/main/RootNavigator";


const middlewares = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}