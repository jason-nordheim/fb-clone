import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider'

/**
 * Root Component 
 */
function App() {
  /** grab the user from global context, no user = no content */
  const [{user}] = useStateValue(); 

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
