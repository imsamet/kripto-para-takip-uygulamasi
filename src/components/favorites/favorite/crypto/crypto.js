import Style from './crypto.module.css'

import { SaveActive } from '../../../icons'
import { useState } from 'react'
import cn from 'classnames'
import {useFavorites} from '../../../../context/favoritesContext'

export default function Crypto ({ favoriteIndex, image, symbol, price, range, hight24 }) {

    const {favorites, dispatch} = useFavorites()

    const handleSave = () => {
        /*
            Silinecek coinin indeksini alınıyor.
            newFaworites'den seçili coini çıkartıp favorites state'ini güncelleniyor
        */
        let newFavorites = favorites;
        const deleteCoinIndex = favorites.favorites[favoriteIndex].coins.indexOf(symbol)
        newFavorites.favorites[favoriteIndex].coins.splice(deleteCoinIndex, 1)

        dispatch({type: 'DELETE_COIN', payload: newFavorites.favorites})

    }

    const isUp = (hight24 - price) < 0;
    const princeChange = Math.abs(hight24 - price)
    const percent = Math.round(((princeChange / price) * 100 + Number.EPSILON) * 100) / 100 // yüzdeyi hesaplayıp virgülden sonra 2 basamaklı olacak şekilde kısaltıyor

    return(
        <div className={Style.container}>

            <div className={Style.imageBox}>
                <img src={image}></img>
                <span>{symbol}<small>/USD</small></span>
            </div>

            <div className={cn(Style.priceBox, isUp ? Style.green : Style.red)}>

                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 10}).format(price)}</span>

                <div className={Style.percent}>

                    <span>{`%${percent}($${Math.round((princeChange + Number.EPSILON) * 100) / 100})`}</span>

                </div>

            </div>

            <div className={Style.rangeBox}>
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 15}).format(range)}</span>
            </div>

            <div className={Style.saveBox} onClick={handleSave}>
                <SaveActive/>
            </div>

        </div>
    )
}