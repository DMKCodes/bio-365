import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    mode: 'light',
    setMode: () => {}
  });

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem('mode');
        console.log("Retrieved mode from local storage:", storedMode);
        return storedMode || 'light';
    });

    useEffect(() => {
        console.log("Setting mode in local storage:", mode);
        localStorage.setItem('mode', mode);
        document.body.className = mode + '-mode';
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);