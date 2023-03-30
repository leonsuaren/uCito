import React from 'react';
import * as styled from './styled';

import * as com from '../../components';
import { useFetch } from '../../hooks/useFetch';

export const UsCities = () => {
  const { data } = useFetch('http://localhost:8080/api/states');
  return (
    <styled.Container>
      <h1>UCITO</h1>
      <h3>US Cities</h3>
      <com.SearchingForm data={data} />
    </styled.Container>
  )
}
