import React from 'react';
import s from './Notes.module.css';
import Note from './Note/Note';
import Items from '../../../Notes.json';

const Notes = () => {
  let NoteItems = Items.map((i) => (
    <Note
      key={i.id}
      userId={i.userId}
      id={i.id}
      title={i.title}
      tag={i.tags.tag}
    />
  ));

  return <div className={s.notes}>{NoteItems}</div>;
};

export default Notes;
