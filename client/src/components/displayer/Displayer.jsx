import React from "react";

export const Displayer = ({ cities = [], loadingCities, errorCities }) => {
  if (loadingCities) return 
  if (errorCities) return 
  return (
    <table>
      <thead>
        <tr>
          <td>Cities</td>
        </tr>
      </thead>
      <tbody>
        {
          cities.state[0].Cities.map((city, key) => {
            return (
              <tr key={key}>
                <td component='th' scope='row'>
                  {city}
                </td>
              </tr>
            )
          })
        }
        </tbody>
    </table>
  );
};
