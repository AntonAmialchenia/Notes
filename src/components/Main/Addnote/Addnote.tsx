import React from 'react';
import s from './Addnote.module.css';
import Button from '../../Button/Button';

const Addnote = () => {
  return (
    <div className={s.add_note}>
      <input className={s.add_note__input} type="text" placeholder="Add note" />
      <Button class={s.add_note__btn} text="Add note"></Button>
    </div>
  );
};

export default Addnote;
