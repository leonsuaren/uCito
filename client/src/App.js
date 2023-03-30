import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils';

import * as vie from "./views";
import { theme } from './utils';
  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <vie.UsCities />
    </ThemeProvider>
  );
}

export default App;
