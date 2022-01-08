import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const Context = createContext()

function NewProvider ({children}) {

    const [news, setNews] = useState()

    useEffect(() => {
        axios.get(`https://cryptonews-api.com/api/v1/category?section=general&items=50&token=v406fi1o1sqfdtzxnlhp7uqfo4juosdmnkjstcan`)
            .then(response => setNews(response.data.data))
        
    }, [])

    return <Context.Provider value={{news, setNews}}>{children}</Context.Provider>
}

const useNew = () => useContext(Context)

export { NewProvider, useNew }