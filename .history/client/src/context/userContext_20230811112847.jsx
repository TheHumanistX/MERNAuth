import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const setUser = async () => {
            if (!user) {
                const { data } = await axios.get('/profile')
                setUser(data)
            }
        }
        setUser();
    }, [])

    return (
        <UserContext.Provider value={

        }>
            {children}
        </UserContext.Provider>
    )

}



const setUser = async () => {