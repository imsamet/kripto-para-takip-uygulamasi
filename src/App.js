import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CryptoProvider}  from './context/cryptoContext'
import {FavoriteProvider}  from './context/favoritesContext'

import Index from './components/layout/index';

function App() {
    return (
        <CryptoProvider>
            <FavoriteProvider>
                <Index/>
            </FavoriteProvider>
        </CryptoProvider>
    );
}

export default App;
