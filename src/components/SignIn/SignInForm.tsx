import { FC, useContext, useState } from "react"

import { Stack, Avatar, Typography, TextField, IconButton, Button } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { storeInfo } from "../../assets/logo"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { signAdminIn } from "../../services/axios/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getPersistAuthLocalStorage, setPersistAuthLocalStorage } from "../../utils/localStorage";
import { AdminStateContext } from "../../context/userContext";

interface IFormValue{
    email: string,
    password: string
}

const logo = {
    ...storeInfo,
    size: "4"
}

const SignInForm : FC = () =>{

    const adminState = useContext(AdminStateContext)

    const navigate = useNavigate()

    const MutateSignAdminIn = useMutation({
        mutationFn: signAdminIn,
        onSuccess: (data) => {
            console.log('Login success:', data);
            // Store the token in localStorage or context
            setPersistAuthLocalStorage(data)
            
            adminState?.setAdminState(getPersistAuthLocalStorage())

            navigate("/")    
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },

      });

    const {control, handleSubmit, formState:{errors}} = useForm<IFormValue>({
        defaultValues:{
            email: "",
            password: ""
        },
        // mode: "onChange"
    })

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onSubmit : SubmitHandler<IFormValue> = data =>{
        console.log(data);

        MutateSignAdminIn.mutate(data)     
        
    }

    return (
        <Stack alignItems={"center"} spacing={3}>
            <Stack >

                <Avatar 
                    src={logo.logo.src} 
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
                                required
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
                    rules={{
                        required: "Không được để trống miền này",
                        pattern:{
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            message: "Mật khẩu không hợp lệ"
                        },
                        minLength: {
                            value: 8,
                            message: "Mật khẩu không hợp lệ"
                        }
                    }}
                    render={
                        ({field}) =>(
                            <TextField 
                                {...field} 
                                required
                                label={"Password"}
                                type={showPassword?"text":"password"}
                                helperText={errors.password?.message}
                                slotProps={{
                                    input:{
                                        endAdornment:
                                            <IconButton onClick={() => setShowPassword(state => !state)}>
                                                {showPassword? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                            </IconButton>
                                    }
                                }}
                                error={!!errors.password?.message}

                            />
                        )
                    }
                />

                <Button type="submit" variant="contained" size="large">
                    Đăng nhập
                </Button>

            </Stack>

        </Stack>

    )
}

export default SignInForm