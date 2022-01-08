import { createContext, useReducer, useContext, useEffect } from "react";
import Reducer from "../reducer/favoriteReducer";

const Context = createContext()

const initialState = localStorage.getItem('taze-kripto-para-takip-app') && localStorage.getItem('taze-kripto-para-takip-app') !== "undefined"
    ? 
        JSON.parse(localStorage.getItem('taze-kripto-para-takip-app')) 
    : 
        {
            favorites : []
        }

function FavoriteProvider ({children}) {

    const [favorites, dispatch] = useReducer(Reducer, initialState)

    useEffect(() => {

        localStorage.setItem('taze-kripto-para-takip-app', JSON.stringify(favorites))
        
    }, [favorites])

    return <Context.Provider value={{favorites, dispatch}}>{children}</Context.Provider>
}

const useFavorites = () => useContext(Context)

export { FavoriteProvider, useFavorites }