import React, { ReactNode, createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Context.Provider
            value={{
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </Context.Provider>
    );
};
