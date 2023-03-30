import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils';

import { UsCities } from "./views/us-cities";
import { theme } from './utils';
  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UsCities />
    </ThemeProvider>
  );
}

export default App;
