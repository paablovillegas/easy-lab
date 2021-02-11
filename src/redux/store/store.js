import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducer/authReducer";
import { institucionReducer } from "../reducer/institucionReducer";

const reducers = combineReducers({
    auth: authReducer,
    institucion: institucionReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ),
);