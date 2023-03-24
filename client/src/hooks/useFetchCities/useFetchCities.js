import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCities = (state) => {
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const [errorCities, setErrorCities] = useState();
  console.log(state);
  useEffect(() => {
    if (!state) return;
    axios
      .post(`http://localhost:8080/api/states/search-state`, {
        state: "California",
      })
      .then((response) => response.data)
      .then(setCities)
      .then(() => setLoadingCities(false))
      .catch((error) => setErrorCities(error));
  }, []);

  return { cities, loadingCities, errorCities };
};
