// @ts-nocheck
import { createStore, applyMiddleware } from 'redux';
import {persistStore ,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./state/reducers/rootReducer"
// import initialStateRedux from './state/initialStateRedux';

// eslint-disable-next-line max-len
// if you want to use local storage instead of session storage, do the following: import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'primary',
  storage,
  whitelist: [], // place to select which state you want to persist
};

// const initialState:PreloadedState<any> = initialStateRedux;

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()))
let persistor = persistStore(store)

export {store, persistor}