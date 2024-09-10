import { Email, Height, Pages } from "@mui/icons-material";
import { Avatar, Box, Button, FormControl, FormHelperText, Grow, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface IFormValue{
    email: string,
    password: string
}

const SignIn : FC = () =>{

    const logo = {
        src: `${process.env.PUBLIC_URL}/logo/logo_lentilab-01.png`,
        name: "3D Lenticular",
        size: "4"
    }

    const {control, handleSubmit, formState:{errors}} = useForm<IFormValue>({
        defaultValues:{
            email: "",
            password: ""
        },
        // mode: "onChange"
    })

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onSubmit : SubmitHandler<IFormValue> = data =>{
        // trigger(["email", "password"])
        console.log(data);
        
    }

    console.log(errors.email);
    

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
                <Stack alignItems={"center"} spacing={3}>
                    <Stack >

                        <Avatar 
                            src={logo.src} 
                            alt={logo.name} 
                            sx={{
                                width: logo.size + 'em',
                                height: "auto",
                                aspectRatio: "1/1"
                            }}
                        />
                    </Stack>

                    <Typography variant="h4" fontWeight={"bold"}>
                        Đăng nhập
                    </Typography>

                    <Stack component={"form"} onSubmit={handleSubmit(onSubmit)} width={"100%"} spacing={2}>

                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Không được để trống miền này",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Email không hợp lệ"
                                }                                
                            }}
                            render={
                                ({field}) =>(
                         
                                    <TextField 
                                        {...field} 
                                        label={"Email"}
                                        type="email"
                                        helperText={errors.email?.message}
                                        fullWidth
                                        // autoFocus
                                        error={!!errors.email?.message}
                                    />
                 
                                )
                            }
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={
                                ({field}) =>(
                                    <TextField 
                                        {...field} 
                                        label={"Password"}
                                        type={showPassword?"text":"password"}
                                        helperText="Something"
                                        slotProps={{
                                            input:{
                                                endAdornment:
                                                    <IconButton onClick={() => setShowPassword(state => !state)}>
                                                        {showPassword? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                    </IconButton>
                                            }
                                        }}
                                    />
                                )
                            }
                        />

                        <Button type="submit" variant="contained" size="large">
                            Đăng nhập
                        </Button>

                    </Stack>

                </Stack>
            </Paper>
        </Grow>
    )
}

export default SignIn