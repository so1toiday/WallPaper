import React from 'react';
import Router from './src/Router';
import { Provider } from 'react-redux';
import { ConfigureStore } from '@store';
import { PersistGate } from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

const store = ConfigureStore();

store.subscribe(() => {
  console.log(store.getState());
})
const App = () => {
  const per=persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={per} loading={null}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
export default App;