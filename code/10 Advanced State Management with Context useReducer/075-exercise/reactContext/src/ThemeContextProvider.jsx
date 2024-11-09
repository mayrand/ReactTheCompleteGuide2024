import {createContext, useState} from 'react';

export const themeContext = createContext({
    type: 'light', setTheme: () => {}
});


export default function ThemeContextProvider({children}) {
    const [theme, set_theme] = useState('light');

    function ToggleTheme() {
        console.log(`Before ${theme}`)
        set_theme(theme === 'light' ? 'dark' : 'light')
        console.log(`After ${theme}`)
    }

    const themeObj = {
        type: theme,
        setTheme: ToggleTheme
    }

    return <themeContext.Provider value={themeObj}>
        {children}
    </themeContext.Provider>
}
