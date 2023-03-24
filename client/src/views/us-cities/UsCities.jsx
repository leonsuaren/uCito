import React from "react";
import { Grid } from "@mui/material";

import * as com from "./../../components";

export const UsCities = () => {
  return (
    <Grid container spacing={2} className="us-cities-container">
      <com.SearchingForm />
    </Grid>
  );
};
