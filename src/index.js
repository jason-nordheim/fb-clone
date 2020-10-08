import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// application 
import App from './App';

// context 
import { AppProvider } from './context/AppProvider'
import reducer from './reducers/reducer'
import { initialState } from "./reducers/initialState"

/* React Boiler Plate + ApplicationContext (AppContext) */
ReactDOM.render(
  <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
