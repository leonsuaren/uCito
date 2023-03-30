import React from 'react';

import { SearchingForm } from '../../components/searching-form';
import { useFetch } from '../../hooks/useFetch';
import { Displayer } from '../../components/displayer/Displayer';

export const UsCities = () => {
  const { data } = useFetch('http://localhost:8080/api/states');
  return (
    <div>
      <h1>UCITO</h1>
      <h3>US Cities</h3>
      <SearchingForm data={data} />
    </div>
  )
}
