
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './auth/authSlice';
// import cartReducer from './cart/cartSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//   },
// });
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer, { loginUser } from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for React Native
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root', // key is the storage key
  storage: AsyncStorage, // specify storage engine, for React Native use AsyncStorage
  whitelist: ['auth'], // List of reducers to persist
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  
});

const persistor = persistStore(store);

export { store, persistor };