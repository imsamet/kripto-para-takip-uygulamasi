import { createContext, useContext, useState, useEffect } from "react";
import CONSTANTS from "../constants/constants";
import axios from 'axios'

const Context = createContext()

function NewProvider ({children}) {

    const [news, setNews] = useState()

    useEffect(() => {
        //axios.get(`${CONSTANTS.NEWS_API_BASE_URL}${CONSTANTS.NEWS_API_GENERAL_URL}${CONSTANTS.NEWS_API_KEY}`)
        //    .then(response => setNews(response.data.data))
        
    }, [])

    return <Context.Provider value={{news, setNews}}>{children}</Context.Provider>
}

const useNew = () => useContext(Context)

export { NewProvider, useNew }