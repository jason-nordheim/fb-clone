import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useAppContext } from "./context/useAppContext"

/**
 * Root Component 
 */
function App() {
  /** grab the user from global context, no user = no content */
  const [{user}] = useAppContext(); 

  return (
    <div className="app">
      { !user 
      ? <Login /> 
      : (
        <>
          <Header /> 
          <div className="app__body">
            <Sidebar /> 
            <Feed /> 
            <Widgets /> 
          </div> 
        </> 
      )
      }
    </div>
  );
}

export default App;
