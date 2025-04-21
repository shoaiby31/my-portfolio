import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Homepage from "./pages/homepage"
import Appbar from "./components/appbar"
import { Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { setDarkMode } from './redux/slices/theme/index'

function App() {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themeMode = useSelector((state) => state.mode.value)

  useEffect(() => {
    if (prefersDarkMode) {
      dispatch(setDarkMode(prefersDarkMode));
    }
  }, [dispatch, prefersDarkMode]);

  const darkTheme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0} sx={{ height: "auto" }} square>
        <Router>
          <Appbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
