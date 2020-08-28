import React from 'react';
import './App.css';
import Header from './Header'

function App() {
  return (
    <div className="app">
      <h1>Lets build a facebook clone!</h1>

      <Header /> 

      {/* 
        app body 
        |-- sidebar 
        |-- feed 
        |-- widget 
       */}

    </div>
  );
}

export default App;
