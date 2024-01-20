import './App.css';
import AppRouter from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
