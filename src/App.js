import { Global } from './components/pokemons/style';
import { ThemeProvider } from './context';
import { Router } from './router';

function App() {
  return (
    <ThemeProvider>
        <Global />
        <Router/>
    </ThemeProvider>
  );
}

export default App;
