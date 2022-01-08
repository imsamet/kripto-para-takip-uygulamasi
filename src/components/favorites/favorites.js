import Style from './favorites.module.css'

import {useFavorites} from '../../context/favoritesContext'
import Favorite from './favorite/favorite'
import { Plus } from '../icons'
import ModuleBox from '../module-box/moduleBox'
import Button from '../button/button'
import { useRef, useState } from 'react'

export default function Favorites () {

    const inputRef = useRef()
    const [isModuleBox, setModuleBox] = useState(false)
    const {favorites, dispatch} = useFavorites()

    const addFavorite = () => {
        setModuleBox(true)
    }

    const buttonCancel = () => {
        setModuleBox(false)
    }

    const buttonSave = () => {

        if(inputRef.current.value !== "") {
            let newFavorites = favorites;
            newFavorites.favorites.push({title: inputRef.current.value, coins: []})
    
            dispatch({type: 'ADD_FAVORITE', payload: newFavorites.favorites})
    
            setModuleBox(false)
        }else{
            inputRef.current.parentElement.classList.add(Style.compulsory)
        }
    }

    const inputBoxHandleClick = () => {// inputBox'a tıklandığında da input'a focus almasını sağlıyor.
        inputRef.current.focus()
    }

    return(
        <div className={Style.container}>

            {
                favorites && favorites.favorites.map((value, index) => {
                    return (
                        <Favorite
                            key={`${index}-${value.name}`}
                            favoriteIndex={index}
                            title={value.title}
                            favoriteCoins={value.coins}
                        />
                    )
                })
            }

            <div className={Style.newFavorite} onClick={addFavorite}>

                <span>İzleme listesi ekle</span>
                <Plus/>

            </div>

            {
                isModuleBox && 
                    <ModuleBox 
                        title={'Yeni liste ekle'}
                        closeFunction={setModuleBox}
                    >
                        <div className={Style.inputBox} onClick={inputBoxHandleClick}>
                            <input placeholder='İzleme listesi' ref={inputRef}/>
                        </div>

                        <div className={Style.modalBody}>
                            <Button onClick={buttonCancel} light>İptal</Button>
                            <Button onClick={buttonSave} light color="green">Ekle</Button>
                        </div>
                    </ModuleBox>
            }

        </div>
    )
}