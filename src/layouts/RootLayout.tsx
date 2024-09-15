import { Box, Grid2, Stack } from "@mui/material";
import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminStateContext } from "../context/userContext";
import NavigateSideBar from "../components/NavigateSideBar/NavigaeSideBar";
import Header from "../components/Header/Header";

const RootLayout : FC = () =>{

    const adminState = useContext(AdminStateContext)

    if( !adminState?.adminState.isSignedIn){
        return (
            <Navigate to={"sign-in"} replace/> 
        )
    }

    return(
        <Box sx={{flexGrow: 1}} minHeight={"100vh"} alignContent={"stretch"} display={"flex"} width={"100%"}>

            <Grid2 container flexGrow={1}>
                <Grid2 size={2} flexGrow={1} sx={{backgroundColor: "primary.dark"}}>
                    <NavigateSideBar/>
                </Grid2>
                <Grid2 size={10} direction={"column"} >
                    <Stack maxHeight={"100vh"}>

                        <Box boxShadow={1}>
                            <Header/>
                        </Box>
                        
                        <Box overflow={"auto"} flexGrow={1}>

                            <Outlet/>
                        </Box>
                    </Stack>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default RootLayout