import React, { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext();


export default function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user?.token) {
            setIsAuthenticated(true)
            setCurrentUser(user)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, currentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}