import {combineReducers} from 'redux';
import {feedReducer} from "feeds/FeedReducer";

const RootReducer = combineReducers({feedReducer});

export default RootReducer;