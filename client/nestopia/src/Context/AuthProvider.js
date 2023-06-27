import { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [pair, setPair] = useState([])
    return (
        <AuthContext.Provider value = {{auth, setAuth, pair, setPair}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};