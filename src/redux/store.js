import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore(
  {
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  },
  composeWithDevTools(),
);
25;
