import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CryptoProvider}  from './context/cryptoContext'

import Index from './components/layout/index';

function App() {
  return (
    <CryptoProvider>
      <Index/>
    </CryptoProvider>
  );
}

export default App;
