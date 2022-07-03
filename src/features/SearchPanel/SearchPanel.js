import React from "react";
import {Button} from '../../components/Button/Button';

const submitFormHandle = (e) => {
  e.preventDefault();
  console.log('submitted!');
}

export const SearchPanel = () => {
  return (
    <form className="" onSubmit={submitFormHandle}>
      <input
        type="text"
        placeholder='Search'
        value={''}
      />
      <Button />
    </form>
  );
}