import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import {CryptoProvider}  from './context/cryptoContext'
import {FavoriteProvider}  from './context/favoritesContext'

import Index from './components/layout/index';
import Detail from './components/layout/detail/detail';
import ModeContext  from './context/modeContext';
import { useEffect, useState } from 'react';

function App() {

    const [mode, setMode] = useState("light")

    useEffect(() => {
        if (!mode) return
        const $html = document.querySelector('html')
        $html.classList.remove('light')
        $html.classList.remove('dark')
        $html.classList.add(mode.toString())
    }, [mode])

    return (
        <CryptoProvider>
            <FavoriteProvider>
                <ModeContext.Provider value={{mode, setMode}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Index/>} exact />
                            <Route path="detail/:cryptoId" element={<Detail/>} />
                        </Routes>
                    </BrowserRouter>
                </ModeContext.Provider>
            </FavoriteProvider>
        </CryptoProvider>
    );
}

export default App;
