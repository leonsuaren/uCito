import React, { useContext } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, Paper, TableCell, tableClasses } from '@mui/material';

import { UcitoDataContext } from '../../context/api';

export const Displayer = () => {
  const ucitoDataContext = useContext(UcitoDataContext);
  const state = ucitoDataContext.state;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.map((city, key) => {
              console.log(city)
              return (
                <TableRow key={key}>
                  <TableCell component='th' scope='row'>
                    {city}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}