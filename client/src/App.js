import { UsCities } from "./views/us-cities";

import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <h1>UCITO</h1>
      <h3>US Cities</h3>
      <UsCities />
    </Container>
  );
}

export default App;
