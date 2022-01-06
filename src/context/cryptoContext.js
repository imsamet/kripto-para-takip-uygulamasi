import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const Context = createContext()

function CryptoProvider ({children}) {

    const [cryptos, setCryptos] = useState()

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            .then(response => setCryptos(response.data))
    }, [])

    return <Context.Provider value={{cryptos, setCryptos}}>{children}</Context.Provider>
}

const useCrypto = () => useContext(Context)

export { CryptoProvider, useCrypto }