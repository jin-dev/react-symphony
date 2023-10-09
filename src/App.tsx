import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '@src/pages/MainScreen';
import DetailScreen from '@src/pages/DetailScreen.tsx';
import { theme } from './components/styles/theme.ts';
import GlobalStyle from './components/styles/GlobalStyles.tsx';
import './App.css';

function App(): React.JSX.Element {
    return (
        // react routing
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/detail/:id" element={<DetailScreen />} />
                <Route path="*" element={<MainScreen />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
