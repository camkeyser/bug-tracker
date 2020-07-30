import React from 'react';
import './App.css';
import './owfont-regular.css';
import NavBar from './nav';
import Main from './main';
import Mobile from './mobile';
import './loader';


function App() {
  return (
    <>
      <Mobile />
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </>
  );
}

export default App;
