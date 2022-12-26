import React, { useState } from 'react';
import s from './Addnote.module.css';
import Button from '../../Button/Button';

const Addnote = () => {

  
  const addNewNote = (e:any) => {
    e.preventDefault()
    const newNote = {
      id: new Date(),
      title,
      tag:title.match(/\/?#[a-z]+/g)
    }
    console.log(newNote);
    console.log(newNote.tag);
  }
  const [title, setTitle] = useState('')



  return (
    <div>
      <form className={s.add_note} action="">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={s.add_note__input}
          type="text"
          placeholder="Add note"
        />
        <Button  class={s.add_note__btn} text="Add note" onClick={addNewNote}></Button>
      </form>
    </div>
  );
};

export default Addnote;
