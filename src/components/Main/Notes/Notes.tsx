import React from 'react';
import s from './Notes.module.css';
import Note from './Note/Note';
import Items from '../../../Notes.json'



const Notes = () => {
  return (
    <div className={s.notes}>
      <Note userId={Items[0].userId} id={Items[0].id} title={Items[0].title} tag={Items[0].tag}/>
      <Note userId={Items[1].userId} id={Items[1].id} title={Items[1].title} tag={Items[1].tag}/>
      <Note userId={Items[2].userId} id={Items[2].id} title={Items[2].title} tag={Items[2].tag}/>
      <Note userId={Items[3].userId} id={Items[3].id} title={Items[3].title} tag={Items[3].tag}/>
      <Note userId={Items[4].userId} id={Items[4].id} title={Items[4].title} tag={Items[4].tag}/>
      <Note userId={Items[5].userId} id={Items[5].id} title={Items[5].title} tag={Items[5].tag}/>
    </div>
  );
};

export default Notes;
