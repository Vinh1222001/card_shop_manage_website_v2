import { AxiosResponse } from "axios"
import instance from "./init"

interface ISignInForm{
    email: string,
    password: string
}

interface ISignUpForm extends ISignInForm{
    user_metadata: {
        full_name: string
    }
}

export const signAdminIn = async (data: ISignInForm):Promise<AxiosResponse> =>{
    const response = await instance.post(
        process.env.REACT_APP_SIGN_IN_EMAIL_PASSWORD_API as string,
        {
            email: data.email,
            gotrue_meta_security: {},
            password: data.password,
        })
    
    return response
}

export const signAdminOut = async ():Promise<AxiosResponse> =>{
    const response = await instance.post(
        process.env.REACT_APP_SIGN_OUT_EMAIL_PASSWORD_API as string
    )

    return response
}

export const signAdminUp = async (data:ISignUpForm):Promise<AxiosResponse> =>{
    const response = await instance.post(
        process.env.REACT_APP_SIGN_UP_EMAIL_PASSWORD_API as string, 
        {
            ...data,
            email_confirm: true
        }
    )

    return response
}