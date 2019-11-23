import {combineReducers} from 'redux';
import {feedReducer} from "feeds/FeedReducer";
import {userReducer} from "users/UserReducer";
import {authReducer} from "auth/AuthReducer";
import {chatReducer} from "chats/ChatReducer";

const RootReducer = combineReducers({authReducer, feedReducer, chatReducer, userReducer});

export default RootReducer;