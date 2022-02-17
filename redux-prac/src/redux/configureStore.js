/* eslint-disable */
import thunk from "redux-thunk";
import dust from "./modules/dust";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  dust,
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
