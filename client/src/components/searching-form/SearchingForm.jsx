import React, { useState } from "react";
import { useFetchCities } from "../../hooks";
import * as com from "../../components";
import * as styled from "./index";

export const SearchingForm = ({ data }) => {
  const [text, setText] = useState("");
  const [stateCities, setStateCities] = useState('');
  const { cities, loadingCities, errorCities } = useFetchCities(stateCities);
  const [suggestions, setSuggestions] = useState([]);
  const [showDisplay, setShowDisplay] = useState(false);
  // const [error, setError] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStateCities(text)
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
    setSuggestions([]);
    setTimeout(() => {
      // setError({
      //   error: false,
      //   message: ''
      // });
    }, 3000);
    setShowDisplay(true);
  };

  const handleOnSuggest = (text) => {
    setText(text);
  };

  const handleOnChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = data.states.filter((city) => {
        const regex = new RegExp(`${text}`, "gi");
        return city.State.match(regex) || city.Code.match(regex);
      });
    } 
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div>
      <div>
        {/*error ? <alert severity="error">{error.message}</alert> : ""*/}
        <styled.FormStyled onSubmit={(e) => handleOnSubmit(e)}>
          <styled.AutocompleteInput
            placeholder='Enter State'
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <styled.SearchButton
            variant="contained"
            type="submit"
          >
            <span>Search Cities</span>
          </styled.SearchButton>
        </styled.FormStyled>
        <styled.CitiesDisplay>
          {suggestions &&
            suggestions.map((suggestion, key) => {
              return (
                <styled.Suggestions
                  key={key}
                  onClick={() => {
                    handleOnSuggest(suggestion.State);
                  }}
                >
                  {suggestion.State}, {suggestion.Code}
                </styled.Suggestions>
              );
            })}
        </styled.CitiesDisplay>
      </div>
      {
        showDisplay ?
        <com.Displayer cities={cities} loadingCities={loadingCities} errorCities={errorCities} stateCities={stateCities} showDisplay={showDisplay} setShowDisplay={setShowDisplay}/>
        : ''
      }
    </div>
  );
};
