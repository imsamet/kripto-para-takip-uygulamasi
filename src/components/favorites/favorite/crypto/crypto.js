import Style from './crypto.module.css'

import { Link } from 'react-router-dom'

import { SaveActive } from '../../../icons'
import cn from 'classnames'
import {useFavorites} from '../../../../context/favoritesContext'

export default function Crypto ({ favoriteIndex, image, symbol, cryptoId, price, range, priceChange, percent }) {

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

    return(
        <div className={Style.container}>

            <Link className={Style.link} to={`/detail/${cryptoId}`}>

                <div className={Style.imageBox}>
                    <img src={image} alt={symbol}></img>
                    <span>{symbol}<small>/USD</small></span>
                </div>

                <div className={cn(Style.priceBox, priceChange >= 0 ? Style.green : Style.red)}>

                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 10}).format(price)}</span>

                    <div className={Style.percent}>

                        <span>{`%${Math.round((percent + Number.EPSILON) * 100) / 100}($${Math.round((priceChange + Number.EPSILON) * 100) / 100})`}</span>

                    </div>

                </div>

                <div className={Style.rangeBox}>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 15}).format(range)}</span>
                </div>

            </Link>

            <div className={Style.saveBox} onClick={handleSave}>
                <SaveActive/>
            </div>

        </div>
    )
}