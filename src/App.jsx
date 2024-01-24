import './App.css';
import AppRouter from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
