import { Grow, Paper } from "@mui/material";
import { FC } from "react";
import SignInForm from "../components/SignIn/SignInForm";

const SignIn : FC = () =>{

    return(
        
        <Grow appear in timeout={500} easing={"ease"}>
            <Paper 
                elevation={1}
                sx={{
                    minWidth: "23em",
                    width: "27em",
                    padding: [1, 3]
                }}
            >

                <SignInForm/>
            
            </Paper>

        </Grow>
    )
}

export default SignIn