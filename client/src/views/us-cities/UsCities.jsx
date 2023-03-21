import React from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import * as com from './../../components';

export const UsCities = () => {

  const getServerData = uri => async () => {
    const response = await axios.get(uri)
    return response.data;
  }


  return (
    <Grid container spacing={2} className='us-cities-container'>
      <Grid item xs={12} sm={12}>
        <com.DataSource getDataFunc={getServerData('http://localhost:8080/api/states')} resourceName="state">
          <com.SearchingForm />
        </com.DataSource>
      </Grid>
      <Grid item item xs={12} sm={12}>
        <com.DataSource>
          <com.Displayer />
        </com.DataSource>
      </Grid>
    </Grid>
  )
}