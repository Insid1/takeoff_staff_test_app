import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/app/app';
import { Provider } from 'react-redux';
import store from 'store/store';
import { checkAuth } from 'store/user/thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// check auth
store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// eslint-disable-next-line import/prefer-default-export
// export { api };
