import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import asyncActionCreator from './middlewares/asyncActionCreator';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const emptyMiddleWare = () => (next) => (action) => {
  const result = next(action);
  return result;
};

let loggerMiddleWare = emptyMiddleWare;

if (process.env.NODE_ENV === 'development') {
  loggerMiddleWare = logger;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(asyncActionCreator, thunk, loggerMiddleWare))
);
const persistor = persistStore(store);

export { store, persistor };
export default store;
