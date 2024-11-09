import Page from './Page.jsx';
import ThemeContextProvider from './ThemeContextProvider.jsx';

function App() {
    return <ThemeContextProvider>
        <Page />
    </ThemeContextProvider>
}

export default App;
