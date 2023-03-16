import { UcitoDataContextProvider } from '../src/context/api';
import { UsCities } from './views/us-cities';

import { Container } from '@mui/material';

function App() {

  return (
    <UcitoDataContextProvider>
      <Container maxWidth='md' sx={{ textAlign: 'center' }}> 
        <h1>UCITO</h1>
        <h3>US Cities</h3>
        <UsCities />
      </Container>
    </UcitoDataContextProvider>
  );
}

export default App;
