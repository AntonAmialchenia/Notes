import React from 'react';
import Button from '../../Button/Button';
import s from './Search.module.css';

const Search = () => {
  return (
    <div className={s.search}>
      <input className={s.search__input} type="text" placeholder="Search..." />
      <Button class={s.search__btn} text="Search"></Button>
    </div>
  );
};

export default Search;
