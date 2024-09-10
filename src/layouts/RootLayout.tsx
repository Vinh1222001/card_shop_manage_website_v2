import { Container, Grid2, Stack } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const RootLayout : FC = () =>{
    return(
        <Container>
            <Stack>
                Side Bar
            </Stack>
            <Grid2 container>
                <Outlet/>
            </Grid2>
        </Container>
    )
}

export default RootLayout