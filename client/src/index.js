import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthProvider } from './AuthProvider';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
