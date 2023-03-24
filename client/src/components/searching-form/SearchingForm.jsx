import React, { useState } from "react";

import { useFetch, useFetchCities } from "../../hooks";

import "./style.css";

export const SearchingForm = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/api/states");
  const [text, setText] = useState("");
  const { cities, loadingCities, errorCities } = useFetchCities(text);
  const [suggestions, setSuggestions] = useState([]);
  // const [error, setError] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0) {
      // setError({
      //   error: true,
      //   message: 'Please enter a State!'
      // });
    } else if (suggestions.length === 0) {
      // setError({
      //   error: true,
      //   message: 'No Matching States!'
      // });
    }
    // await axios.post('http://localhost:8080/api/states/search-state', { state: text }).then((response) => {
    //   ucitoDataContext.setState(response.data.state[0].Cities);
    // }).catch((error) => {
    //   // setError({
    //   //   error: true,
    //   //   message: 'Something went wrong!'
    //   // });
    // });
    setSuggestions([]);
    setTimeout(() => {
      // setError({
      //   error: false,
      //   message: ''
      // });
    }, 3000);
  };

  const handleOnSuggest = (text) => {
    setText(text);
    // setSuggestions([]);
  };

  const handleOnChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = data.states.filter((city) => {
        const regex = new RegExp(`${text}`, "gi");
        return city.State.match(regex) || city.Code.match(regex);
      });
    } else {
      // setError({
      //   error: true,
      //   message: 'No maching states!'
      // });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div>
      <div item xs={12} sm={12}>
        {error ? <alert severity="error">{error.message}</alert> : ""}
        <form className="form-style" onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className="autocomplete-input-style"
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button
            className="search-button-style"
            variant="contained"
            type="submit"
          >
           <span>Search City</span> 
          </button>
        </form>
        <div className="cities-diaplay">
          {suggestions &&
            suggestions.map((suggestion, key) => {
              return (
                <div
                  className="suggestions"
                  key={key}
                  onClick={() => {
                    handleOnSuggest(suggestion.State);
                  }}
                >
                  {suggestion.State}, {suggestion.Code}
                </div>
              );
            })}
        </div>
      </div>

    </div>
  );
};
