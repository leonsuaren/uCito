import React, { Fragment } from "react";
import * as styled from './index';
import * as com from '../../components';

export const Displayer = ({ cities = [], loadingCities, errorCities, stateCities }) => {
  if (errorCities) return 
  if (loadingCities) return <com.Loading />;
  let citiesCount = cities.state[0].Cities.length || 0;
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
