import { createContext, useContext, ReactNode, useState } from "react"
import { Response } from '../shared/types/types'
import { useEffect } from "react"

interface IUser {
    email: string
    username: string
    role: string
}

interface IUserContext{
    user: IUser | null
    login: (email: string, password: string) => void
    register: (email: string, username: string, password: string) => void
    isAuthenticated: () => boolean
}

const initialValue: IUserContext = {
    user: null,
    login: (email: string, password: string) => {},
    register: (email: string, username: string, password: string) => {},
    isAuthenticated: () => false,
}
const userContext = createContext<IUserContext>(initialValue)

export function useUserContext(){
    return useContext(userContext)
}

interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<IUser | null>(null)

    async function getData(token: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/me', {
                headers: {'Authorization': `Bearer ${token}`}
            })
            const result: Response<IUser> = await response.json()
            if (result.status === 'error'){
                console.log(result.message) 
                return
            }
            setUser(result.data)
        } catch(error){

        }
    }

    async function login(email: string, password: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/login', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({'email': email, 'password': password})
            })
            const result: Response<string> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }
            getData(result.data)
            localStorage.setItem('token', result.data)
        } catch(error){

        }
    }
    
    async function register(email: string, username: string, password: string){
        try {
            const response = await fetch('http://localhost:8000/api/user/register', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({'email': email, 'username': username, 'password': password})
            })

            const result: Response<string> = await response.json();
            if (result.status === 'error'){
                console.log(result.message);
                return;
            }
            getData(result.data)
            localStorage.setItem('token', result.data)

        } catch(error){

        }
    }
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            return
        }
        getData(token)
    },[])
    return <userContext.Provider 
    value={{
        user: user,
        login: login,
        register: register,
        isAuthenticated: () => false
    }}>

    {props.children}
    </userContext.Provider> 
}