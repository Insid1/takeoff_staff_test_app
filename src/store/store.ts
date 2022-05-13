import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/data-slice';
import interfaceReducer from './interface/interface-slice';
import userReducer from './user/user-slice';

enum ReducerName {
  DATA = 'DATA',
  USER = 'USER',
  INTERFACE = 'INTERFACE',
}

const store = configureStore({
  reducer: {
    [ReducerName.DATA]: dataReducer,
    [ReducerName.INTERFACE]: interfaceReducer,
    [ReducerName.USER]: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
