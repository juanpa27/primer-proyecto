import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

 const onSearcValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
     <input 
      className="TodoSearch" 
      type="text" 
      value={searchValue}
      placeholder="Buscar" 
      onChange={onSearcValueChange}
    />
   
  );
}


export { TodoSearch };