import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as users from "../users";

const rootReducer = combineReducers({
  users: users.reducer,
});

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore();
