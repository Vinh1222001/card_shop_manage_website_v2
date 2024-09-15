import { Avatar, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { storeInfo } from "../../assets/logo";
import { useNavigate } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import StyleIcon from '@mui/icons-material/Style';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const NavigateSideBar:FC = () =>{
    
    const logo = {
        ...storeInfo,
        size: 6
    }

    const navigateButtons = [
        {
            title: "dash board",
            icon: <DashboardIcon/>,
            path: "dash-board"
        }, 
        {
            title: "products",
            icon: <StyleIcon/>,
            path: "products"
        }, 
        {
            title: "orders",
            icon: <ShoppingCartIcon/>, 
            path: "orders"
        },  
        {
            title: "store information",
            icon: <StoreIcon/>,
            path: "store-info"
        },
        {
            title: "media",
            icon: <PermMediaIcon/>,
            path: "media"
        }, 
        {
            title: "accounts",
            icon: <PeopleAltIcon/>,
            path: "accounts"
        }, 
        {
            title: "system setting",
            icon: <SettingsIcon/>,
            path: "system-setting"
        }
    ]

    const navigate = useNavigate()
    
    return(
        <Stack alignItems={"center"} padding={2} gap={5}>
            
            <Stack alignItems={"inherit"} gap={2}>

                <Avatar 
                    src={logo.logo.src} 
                    sx={{
                        width: logo.size + 'em',
                        height: "auto",
                        aspectRatio: "1/1"
                    }}/>
                
                <Typography variant="h4" fontWeight={"bold"} color="white">
                    {logo.name}
                </Typography>
            </Stack>
            
            <Stack gap={2} width={"100%"}>

                {
                    navigateButtons.map((navigateButton, index)=>(

                        <Button 
                            key={`navigate-button-${index}`} 
                            variant="contained"
                            onClick={()=>{
                                navigate(navigateButton.path)
                            }}
                            startIcon={navigateButton.icon}
                            sx={{
                                justifyContent: "start",
                                ":hover":{
                                    backgroundColor: "primary.light"
                                }
                            }}
                            size="large"
                        >
                            {navigateButton.title}
                        </Button>
                    ))
                }
            </Stack>
        
        </Stack>
    )
}

export default NavigateSideBar