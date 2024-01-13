import React from 'react';
import Routes from './src/navigators/Routes';
import { ContextProvider } from './src/utils/Context';

const App = () => {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    );
};

export default App;
