import Style from './crypto.module.css'

import { Done, Save } from '../../icons'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useFavorites} from '../../../context/favoritesContext'
import cn from 'classnames'
import ModuleBox from '../../module-box/moduleBox'
import Button from '../../button/button'

export default function Crypto ({ image, symbol, cryptoId, price, range, priceChange, percent }) {

    const checkboxContentRef = useRef()// modelbox'ın içindeki chckbox capsayıcı div'i. Seçili favori listelerini almak için
    const [isModuleBox, setModuleBox] = useState(false)
    const {favorites, dispatch} = useFavorites()

    const addFavoriteList = () => { // save iconuna tıklandığında
        setModuleBox(true)
    }

    const buttonCancel = () => {// iptal butonu (modalBox içinde)
        setModuleBox(false)
    }

    const buttonSave = () => {// kaydet butonu (modalBox içinde)

        let newFavorites = favorites;
        const checkboxContent = checkboxContentRef.current.children

        Array.prototype.map.call(checkboxContent, (child, index) => {// checkboxCoktent'i döndürüp newFavorites'a ekliyor
            child.children[1].checked && 
                newFavorites.favorites[index].coins.push(symbol)//seçili checkbox'ın index'i ile favorilerin indeksi aynı, checked'sa newFavorites'a ekliyor
        })

        dispatch({type: 'ADD_FAVORITE_COIN', payload: newFavorites.favorites}) //newFavorites global state'e ekleniyor

        setModuleBox(false)
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