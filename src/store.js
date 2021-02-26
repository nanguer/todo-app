import { createStore, compose, applyMiddleware } from "redux";
import todosReducer from "./reducers/todos";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//FOR THE MOMENT JUST AN EMPTY ARRAY... SINCE MIDDLEWARE LIKE SAGAS ARE COMING SOON I PREFERRED TO ALREADY CONFIGURE IT LIKE THIS :)
const middlewares = [];

const store = createStore(
  todosReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
