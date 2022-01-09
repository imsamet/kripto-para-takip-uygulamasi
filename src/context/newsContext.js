import { createContext, useContext, useState, useEffect } from "react";
import CONSTANTS from "../constants/constants";
import axios from 'axios'

const Context = createContext()

function NewProvider ({children}) {

    const [news, setNews] = useState()

    useEffect(() => {
        //axios.get(`https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${CONSTANTS.NEWS_API_KEY}`)
        //    .then(response => setNews(response.data.data))
        
    }, [])

    return <Context.Provider value={{news, setNews}}>{children}</Context.Provider>
}

const useNew = () => useContext(Context)

export { NewProvider, useNew }