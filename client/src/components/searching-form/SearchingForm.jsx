import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UcitoDataContext } from '../../context/api';

import { Button, Input, Alert } from '@mui/material';

import './style.css';

export const SearchingForm = ({ ucitoData }) => {
  const ucitoDataContext = useContext(UcitoDataContext);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0) {
      setError({
        error: true,
        message: 'Please enter a State!'
      });
    }
    else if (suggestions.length === 0) {
      setError({
        error: true,
        message: 'No Matching States!'
      });
    }
    await axios.post('http://localhost:8080/api/states/search-state', {state: text}).then((response) => {
      ucitoDataContext.setState(response.data.state[0].Cities);
    }).catch((error) => {
      setError({
        error: true,
        message: 'Something went wrong!'
      });
    });
    setSuggestions([]);
    setTimeout(() => {
      setError({
        error: false,
        message: ''
      });
    }, 3000);
  };

  const handleOnSuggest = (text) => {
    setText(text);
    // setSuggestions([]);
  }

  const handleOnChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = ucitoData.filter(city => {
        const regex = new RegExp(`${text}`, "gi");
        return city.State.match(regex) || city.Code.match(regex);
      })
    } else {
      setError({
        error: true,
        message: 'No maching states!'
      });
    }
      console.log(matches)
    setSuggestions(matches);
    setText(text);
  }

  return (
    <div>
      {
        error.error ? <Alert severity='error'>{error.message}</Alert> : ''
      }
      <form className='form-style' onSubmit={(e) => handleOnSubmit(e)}>
        <Input className='autocomplete-input-style'
          type='text'
          value={text}
          onChange={e => handleOnChange(e.target.value)}
        />
        <Button className='search-button-style' variant="contained" type='submit'>Search City</Button>
      </form>
      <div className='cities-diaplay'>
        {
          suggestions && suggestions.map((suggestion, key) => {
            return (
              <div className='suggestions' key={key}
                onClick={() => { handleOnSuggest(suggestion.State) }}
              >{suggestion.State}, {suggestion.Code}</div>
            )
          })
        }
      </div>
    </div>
  )
}