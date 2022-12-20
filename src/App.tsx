import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Notes from './Notes.json';

function App() {
  console.log(Notes[1].title);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
