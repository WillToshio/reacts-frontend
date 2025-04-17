import{ createContext, useContext, useEffect, useState, useRef, Children } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    // lógica
    
    return (
        <AuthContext.Provider value={{}} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);