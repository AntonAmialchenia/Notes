import React from 'react';
import Content from './Content/Content';
import s from './Note.module.css';
import Tags from './Tags/Tags';

interface NoteProps {
    userId: number
    id: number
    title: string
    completed?: boolean
    tag?: string
}
const Note = (props: NoteProps) => {
  return (
    <div className={s.item}>
      <Content text={props.title} tag={props.tag}/>
      <Tags tag={props.tag}/>
    </div>
  );
};

export default Note;
