import React from "react";
import {Provider} from 'react-redux'
import { store } from "./app/store";
import App from './App'
import {createRoot} from 'react-dom/client';

const rootApp = createRoot(document.getElementById('root'))

rootApp.render(
  <Provider store={store}>
    <App />
  </Provider>
  );