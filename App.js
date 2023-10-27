import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './configureStore'; 
import AuthScreen from './src/navigation/AuthScreen';
import { store } from './src/redux/store';
import { persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AuthScreen/>
      </PersistGate>
    </Provider>
  );
};
export default App;