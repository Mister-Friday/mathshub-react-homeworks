import React from 'react';
import './GenreFilter.css';

function GenreFilter({ onChangeFilter }) {
    const dropDownChangeHandler = (event) => {
      onChangeFilter(event.target.value);
    };
    return (
      <div>
        <label>Фильтр по жанрам</label>
        <select onChange={dropDownChangeHandler}>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Blues">Blues</option>
          <option value="TerrorCore">TerrorCore</option>
        </select>
      </div>
    );
  }
  
  export default GenreFilter;