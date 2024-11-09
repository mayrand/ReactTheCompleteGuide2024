import {themeContext} from './ThemeContextProvider.jsx';
import {useContext} from "react";

export default function Header() {
    const {setTheme } = useContext(themeContext);
    return (
        <header>
            <h1>Demo Website</h1>
            <button onClick={()=>setTheme()}>Toggle Theme</button>
        </header>
    );
}
