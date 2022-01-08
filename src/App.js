import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import {CryptoProvider}  from './context/cryptoContext'
import {FavoriteProvider}  from './context/favoritesContext'

import Index from './components/layout/index';
import Detail from './components/layout/detail/detail';

function App() {
    return (
        <CryptoProvider>
            <FavoriteProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>} exact />
                        <Route path="detail/:cryptoId" element={<Detail/>} />
                    </Routes>
                </BrowserRouter>
            </FavoriteProvider>
        </CryptoProvider>
    );
}

export default App;
