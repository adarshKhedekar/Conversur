import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as UseAppDispatch, useSelector as UseAppSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import {rootPersistConfig, rootReducer} from './rootReducer'

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})

const persister = persistStore(store);

const {dispatch} = store;

const useSelector = UseAppSelector;

const useDispatch = () => UseAppDispatch();

export {store, persister, dispatch, useSelector, useDispatch}