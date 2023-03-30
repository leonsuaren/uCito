import React, { Fragment } from "react";
import * as styled from './index';

export const Displayer = ({ cities = [], loadingCities, errorCities, stateCities }) => {
  if (loadingCities) return 
  if (errorCities) return 
  let citiesCount = cities.state[0].Cities.length;
  let stateCode = cities.state[0].Code;
  return (
    <Fragment>
      <h3>{stateCities}</h3>
      <ul>
        <li>{citiesCount} cities</li>
        <li>Code "{stateCode}"</li>
      </ul>
      <styled.CitiesWrapper>
        {
          cities.state[0].Cities.map((citi, i) => {
            return (
              <styled.CitiesCard key={i}>
                {citi}
              </styled.CitiesCard>
            )
          })
        }
      </styled.CitiesWrapper>
    </Fragment>
  );
};
