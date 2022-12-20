import React from 'react';
import Button from '../../../../Button/Button';
import s from './Content.module.css';

interface ContentProps {
  text: string;
  tag?: string;
}

const Content = (props: ContentProps) => {
  return (
    <div className={s.wrap}>
      <div className={s.text}>{props.text}</div>
      <div className={s.buttons}>
        <Button class={s.button__edit} text="Edit"></Button>
        <Button class={s.button__del} text="Del"></Button>
      </div>
    </div>
  );
};

export default Content;
