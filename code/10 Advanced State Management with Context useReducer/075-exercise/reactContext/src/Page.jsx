import Header from './Header.jsx';
import {themeContext} from './ThemeContextProvider.jsx';
import {useContext} from "react";

export default function Page() {
    const {type} = useContext(themeContext);
    return (
        <div id="app" className={type}>
            <Header/>

            <article>
                <h2>React Course</h2>
                <p>
                    A course that teaches you React from the ground up and in great depth!
                </p>
            </article>
        </div>
    );
}
