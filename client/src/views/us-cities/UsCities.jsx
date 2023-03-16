import { useContext } from 'react';

import { Grid } from '@mui/material';

import { UcitoDataContext } from '../../context/api';
import { SearchingForm } from '../../components/searching-form';
import { Displayer } from '../../components/displayer';

export const UsCities = () => {
  const ucitDataContext = useContext(UcitoDataContext);
  const ucitoData = ucitDataContext.ucitoData;

  return (
    <Grid container spacing={2} className='us-cities-container'>
      <Grid item xs={12} sm={12}>
        <SearchingForm ucitoData={ucitoData}/>
      </Grid>
      <Grid item item xs={12} sm={12}>
        <Displayer />
      </Grid>
    </Grid>
  )
}