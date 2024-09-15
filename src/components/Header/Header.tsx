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
            justifyContent={"end"}
            padding={1}
            gap={1}
        >
            <BreadCrumbs/>

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
    )
}

export default Header