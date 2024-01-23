'use client'
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext('light');

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=>{
       // return localStorage.getItem('theme') || 'light'
        return 'light';
    }); // default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            // localStorage.setItem('theme', newTheme); // Save to localStorage
            return newTheme;
        });
    };
    const themeClass = theme==="light" ? "light-theme" : "dark-theme"

    /*Wrapping everything in div doesn't feel right.*/
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            <div className={themeClass}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};