import React from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import DetailScreen from './pages/DetailScreen';



function App(): React.JSX.Element {
    return (
        <Routes>
            <Route path='/' element={<MainScreen/>} />
            <Route path='/detail/:id' element={<DetailScreen/>} />
            <Route path="*" element={<MainScreen />}/>
        </Routes>
    )
}

export default App
