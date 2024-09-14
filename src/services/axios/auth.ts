import { AxiosResponse } from "axios"
import instance from "./init"

interface ILoginForm{
    email: string,
    password: string
}

export const signAdminIn = async (data: ILoginForm):Promise<AxiosResponse> =>{
    const response = await instance.post(
        '/auth/v1/token?grant_type=password',
        {
            email: data.email,
            gotrue_meta_security: {},
            password: data.password,
        })
    
    return response
}

export const signAdminOut = async () =>{

}