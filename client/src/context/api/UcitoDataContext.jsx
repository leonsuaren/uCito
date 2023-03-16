import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UcitoDataContext = createContext();

export const UcitoDataContextProvider = ({ children }) => {
  const [ucitoData, setUcitoData] = useState();
  const [state, setState] = useState([]);
  let data = JSON.stringify({
    "collection": "cities_names",
    "database": "uCito",
    "dataSource": "ucitoCluster"
  });
  let config = {
    method: 'post',
    url: 'http://localhost:8080/api/states',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/states').then((response) => {
      setUcitoData(response.data.states);
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <UcitoDataContext.Provider value={{ ucitoData, state, setState }}>
      {children}
    </UcitoDataContext.Provider>
  )
}
