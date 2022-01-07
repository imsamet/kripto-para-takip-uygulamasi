import Style from './crypto.module.css'

import { Done, Save } from '../../icons'
import { useRef, useState } from 'react'
import {useFavorites} from '../../../context/favoritesContext'
import cn from 'classnames'
import ModuleBox from '../../module-box/moduleBox'
import Button from '../../button/button'

export default function Crypto ({ image, symbol, price, range, hight24 }) {

    const checkboxContentRef = useRef(true)
    const [isModuleBox, setModuleBox] = useState(false)
    const {favorites, dispatch} = useFavorites()

    const addFavoriteList = () => {
        setModuleBox(true)
    }

    const buttonCancel = () => {
        setModuleBox(false)
    }

    const buttonSave = async () => {

        let newFavorites = favorites;
        const checkboxContent = checkboxContentRef.current.children

        Array.prototype.map.call(checkboxContent, (child, index) => {
            child.children[1].checked && 
                newFavorites.favorites[index].coins.push(symbol)
        })

        await dispatch({type: 'ADD_FAVORITE_COIN', payload: newFavorites.favorites})

        setModuleBox(false)
    }

    const isUp = (hight24 - price) < 0;
    const princeChange = Math.abs(hight24 - price)
    const percent = Math.round(((princeChange / price) * 100 + Number.EPSILON) * 100) / 100 // yüzdeyi hesaplayıp virgülden sonra 2 basamaklı olacak şekilde kısaltıyor

    return(
        <div className={Style.container}>

            <div className={Style.imageBox}>
                <img src={image} alt={symbol}></img>
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

            <div className={Style.saveBox} onClick={addFavoriteList}>
                <Save/>
            </div>

            {
                isModuleBox && 
                    <ModuleBox 
                        title='İzleme listesine ekle'
                        text="Liste seç"
                        closeFunction={setModuleBox}
                    >

                        <div ref={checkboxContentRef}>

                            {
                                favorites.favorites.map((value, index) => {

                                    const isChecked = value.coins.find(coin => coin === symbol) !== undefined

                                    return(
                                        <div className={Style.modalFavoriteList} key={`checkbox-${index}`}>
                                            <span className={Style.title}>{value.title}</span>
            
                                            {
                                                isChecked ? 
                                                    <input className={Style.input} type="checkbox" defaultChecked/>
                                                :
                                                    <input className={Style.input} type="checkbox"/>
                                            }

                                            <span className={Style.checkBox}>
                                                <Done/>
                                            </span>
                                        </div>
                                    )
                                })
                            }

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