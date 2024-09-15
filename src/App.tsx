import { Box} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { checkExistPersistAuthLocalStorgae, getPersistAuthLocalStorage, IPersistAuth, setDefautlPersistAuthLocalStorage } from './utils/localStorage';
import { useState } from 'react';
import { AdminStateContext } from './context/userContext';


function App() {

  
  if(!checkExistPersistAuthLocalStorgae()){
    
    setDefautlPersistAuthLocalStorage()
    
  }
  const [adminState, setAdminState] = useState<IPersistAuth>(()=>(
    getPersistAuthLocalStorage()
  ))

  return (
    <AdminStateContext.Provider value={{adminState, setAdminState}}>

      <Box 
        component="main"
        sx={{
          width:"100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:0
        }}
      >
      
        <Outlet/>
      
      </Box>

    </AdminStateContext.Provider>
  );
}

export default App;
