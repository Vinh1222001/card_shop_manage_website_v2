import { Avatar, Button, IconButton, Stack } from "@mui/material";
import { FC, useContext } from "react";

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { blueGrey } from "@mui/material/colors";
import { AdminStateContext } from "../../context/userContext";
import BreadCrumbs from "./BreadCrumb";

const Header:FC = () =>{

    const adminState = useContext(AdminStateContext)

    return(
        <Stack 
            direction={"row"} 
            sx={{
                backgroundColor: blueGrey[800]
            }}
            justifyContent={"space-between"}
            padding={"0.5em 2em"}
            gap={1}
            alignItems={"center"}
        >
            <BreadCrumbs/>

            <Stack gap={1} direction={"row"}>

                <IconButton sx={{color: 'white'}}>
                    <NotificationsActiveIcon/>
                </IconButton>

                <Button
                    variant="text"
                    endIcon={
                        <Avatar src={adminState?.adminState.user.avatar}/>
                    }
                    size="small"
                    sx={{
                        color: 'white'
                    }}
                >
                    {adminState?.adminState.user.full_name}
                </Button>
            </Stack>
        </Stack>
    )
}

export default Header