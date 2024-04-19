import React, { createContext, useState } from 'react';

export const PublicacionesContext = createContext();

export const PublicacionesProvider = ({ children }) => {
    const [publicaciones, setPublicaciones] = useState([]);

    const agregarPublicacion = (nuevaPublicacion) => {
        setPublicaciones([...publicaciones, nuevaPublicacion]);
    };

    return (
        <PublicacionesContext.Provider value={{ publicaciones, agregarPublicacion }}>
            {children}
        </PublicacionesContext.Provider>
    );
};
