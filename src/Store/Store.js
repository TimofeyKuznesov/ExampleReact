import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";


import app from "../Reducers/AppReducer";
import ui from "../Reducers/UIReducer";

import AppSaga from "../Saga/AppSaga";

import * as AppActions from "../Actions/AppActions";


const sagaMiddleware = createSagaMiddleware();


let AppStore = createStore(combineReducers({app,ui}),applyMiddleware(sagaMiddleware));
sagaMiddleware.run(AppSaga);
AppStore.dispatch(AppActions.departments.request());

export default AppStore;
