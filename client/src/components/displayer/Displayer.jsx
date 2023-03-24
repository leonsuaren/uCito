import React from "react";

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TableCell,
  tableClasses,
} from "@mui/material";

export const Displayer = ({ cities }) => {
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
            // cities.states.Cities.map((city, key) => {
            //   console.log(city)
            //   return (
            //     <TableRow key={key}>
            //       <TableCell component='th' scope='row'>
            //         {city}
            //       </TableCell>
            //     </TableRow>
            //   )
            // })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
