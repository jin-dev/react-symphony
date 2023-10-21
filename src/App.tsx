import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '@src/pages/MainScreen';
import DetailScreen from '@src/pages/DetailScreen.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import { theme } from './components/styles/theme.ts';
import GlobalStyle from './components/styles/GlobalStyles.tsx';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
    return (
        // react routing
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<MainScreen />} />
                    <Route path="/detail/:id" element={<DetailScreen />} />
                    <Route path="*" element={<MainScreen />} />
                </Routes>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
