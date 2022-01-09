import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import CONSTANTS from '../constants/constants';

const Context = createContext()

function CryptoProvider ({children}) {

    const [cryptos, setCryptos] = useState()

    useEffect(() => {
        axios.get(`${CONSTANTS.COIN_API_BASE_URL}${CONSTANTS.COIN_API_GENERAL_URL}`)
            .then(response => setCryptos(response.data))
    }, [])

    return <Context.Provider value={{cryptos, setCryptos}}>{children}</Context.Provider>
}

const useCrypto = () => useContext(Context)

export { CryptoProvider, useCrypto }