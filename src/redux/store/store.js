import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { institucionReducer } from "../reducer/institucionReducer";
import { componenteReducer } from "../reducer/componenteReducer";
import { analisisReducer } from "../reducer/analisisReducer";
import { pacienteReducer } from "../reducer/pacienteReducer";
import { doctorReducer } from "../reducer/doctorReducer";
import { authReducer } from "../reducer/authReducer";

const reducers = combineReducers({
    auth: authReducer,
    institucion: institucionReducer,
    doctor: doctorReducer,
    paciente: pacienteReducer,
    componente: componenteReducer,
    analisis: analisisReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ),
);