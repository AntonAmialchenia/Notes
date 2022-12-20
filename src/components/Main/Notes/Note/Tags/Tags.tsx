import React from 'react';
import s from './Tags.module.css';

interface TagsProps {
    tag?: string
}

const Tags = (props: TagsProps) => {
  return (
    <div className={s.tags}>
      <div className={s.tag}>{props.tag}</div>
      <div className={s.tag}>{props.tag}</div>
    </div>
  );
};

export default Tags;
