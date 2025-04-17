import{ createContext, useContext, useEffect, useState, useRef, Children } from 'react';


const WhatsAppAuthContext = createContext();

export const WhatsAppAuthProvider = ({children}) => {

    // lógica
    
    return (
        <WhatsAppAuthContext.Provider value={{}} >
            {children}
        </WhatsAppAuthContext.Provider>
    );
};

export const useWhatsAppAuth = () => useContext(WhatsAppAuthContext);