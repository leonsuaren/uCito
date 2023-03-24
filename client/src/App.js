import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils';

import { UsCities } from "./views/us-cities";
import { theme } from './utils';
  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>UCITO</h1>
      <h3>US Cities</h3>
      <UsCities />
    </ThemeProvider>
  );
}

export default App;
