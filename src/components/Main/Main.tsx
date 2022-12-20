import React from 'react';
import Addnote from './Addnote/Addnote';
import s from './Main.module.css';
import Notes from './Notes/Notes';
import Search from './Search/Search';

const Main = () => {
  return (
    <main className={s.main}>
      <div className="container">
        <Search />
        <Addnote />
        <Notes />
      </div>
    </main>
  );
};

export default Main;
