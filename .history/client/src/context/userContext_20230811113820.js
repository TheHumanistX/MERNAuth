import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({});

export function UserContextProvider ({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!user) {
                const { data } = await axios.get('/profile')
                setUser(data)
            }
        }
        fetchUser();
    }, [])

    return (
        <UserContext.Provider value={user, setUser}>
            {children}
        </UserContext.Provider>
    )

}



