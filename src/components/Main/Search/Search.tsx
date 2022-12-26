import React from 'react';
import Button from '../../Button/Button';
import s from './Search.module.css';

const Search = () => {
  return (
    <div >
      <form className={s.search} action="">
        <input
          className={s.search__input}
          type="text"
          placeholder="Search..."
        />
        <Button class={s.search__btn} text="Search"></Button>
      </form>
    </div>
  );
};

export default Search;
