import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Container 
      component={"main"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
    
      <Outlet/>
    
    </Container>
  );
}

export default App;
