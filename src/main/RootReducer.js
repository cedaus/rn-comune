import {combineReducers} from 'redux';
import {feedReducer} from "feeds/FeedReducer";
import {userReducer} from "users/UserReducer";
import {authReducer} from "auth/AuthReducer";

const RootReducer = combineReducers({authReducer, feedReducer, userReducer});

export default RootReducer;