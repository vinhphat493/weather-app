import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './Search.css';
import { fetchWeather } from '../../stores/actions/weatherAction';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();

    const target = inputRef.current;
    const location = target.value.trim();

    dispatch(fetchWeather(location));

    //clear value input
    inputRef.current.value = '';
  };

  return (
    <form className="Search" onSubmit={handleSearch}>
      <div className="row">
        <SearchIcon className="Search-icon" />
        <InputBase
          className="Search-bar"
          type="text"
          placeholder="Search for a location"
          fullWidth
          inputProps={{ ref: inputRef }}
        />
      </div>
    </form>
  );
};

export default Search;
