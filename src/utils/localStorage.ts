import { AxiosResponse } from "axios"

const localStorage = window.localStorage

export interface IPersistAuth{
    isSignedIn: boolean,
    user:{
        id: string,
        email: string,
        full_name: string,
        avatar: string,
        role: string,
        phone: string,
        last_sign_in_at: string
    }
}

const LOCAL_STORAGE_LIST = {
    persistAuth: {
        name: "persist:auth",
        defaultValue:{
            isSignedIn: false,
            user:{
                id: "",
                email: "",
                full_name: "",
                avatar: "",
                role: "",
                phone: "",
                last_sign_in_at: ""
            }
        }
    }
}


const setLocalStorage = (
    storageName: string, 
    value: object
) =>{
    localStorage.setItem(storageName, JSON.stringify(value))    
}

const getLocalStorage = (
    storageName: string
): object =>{

    return JSON.parse(localStorage.getItem(storageName) as string)
}

const checkExistStorage = (
    storageName: string
)=>{
    return localStorage.getItem(storageName)!==null
}

export const checkExistPersistAuthLocalStorgae = () =>{
    return checkExistStorage(LOCAL_STORAGE_LIST.persistAuth.name)
}

export const setDefautlPersistAuthLocalStorage = () =>{

    setLocalStorage(LOCAL_STORAGE_LIST.persistAuth.name, LOCAL_STORAGE_LIST.persistAuth.defaultValue)

}

export const setPersistAuthLocalStorage = (
    value: Promise<AxiosResponse> | any
) =>{

    let userInfo = {} as IPersistAuth

    userInfo = {
        ...userInfo,
        isSignedIn : true,
        user: {
            ...userInfo.user,
            email: value.user.email,
            id: value.user.id,
            full_name: value.user.user_metadata.full_name,
            phone: value.user.phone,
            last_sign_in_at: value.user.last_sign_in_at,
            role: value.user.role,
            avatar: value.user.user_metadata.avatar_url
        }
    }

    setLocalStorage(
        LOCAL_STORAGE_LIST.persistAuth.name,
        userInfo
    )
}

export const getPersistAuthLocalStorage = (): IPersistAuth =>{
    return getLocalStorage(LOCAL_STORAGE_LIST.persistAuth.name) as IPersistAuth
} 