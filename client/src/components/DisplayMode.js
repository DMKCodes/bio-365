import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DisplayMode = () => {
    const { mode, setMode } = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    };

    return (
        <div className='display-mode-btn d-flex justify-content-center align-items-center'>
            {mode === 'dark' ? (
                <FontAwesomeIcon
                    className={`${isHovered ? 'fa-beat' : ''}`}
                    icon={faSun} 
                    size='xl'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => toggleMode()}
                />
            ) : (
                <FontAwesomeIcon
                    className={`${isHovered ? 'fa-beat' : ''}`}
                    icon={faMoon} 
                    size='xl'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => toggleMode()}
                />
            )}
        </div>
    );
};

export default DisplayMode;