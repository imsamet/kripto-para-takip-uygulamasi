import Style from './favorite.module.css'

import {useCrypto} from '../../../context/cryptoContext'
import {useFavorites} from '../../../context/favoritesContext'
import Crypto from './crypto/crypto'
import { Delete } from '../../icons'
import { useState } from 'react'
import ModuleBox from '../../module-box/moduleBox'
import Button from '../../button/button'

export default function Favorite ({favoriteIndex, title, favoriteCoins}) {

    const [isModuleBox, setModuleBox] = useState(false)
    const {cryptos, setCryptos} = useCrypto()
    const {favorites, dispatch} = useFavorites()

    const changeModuleBox = () => {
        setModuleBox(true)
    }

    const buttonCancel = () => {
        setModuleBox(false)
    }

    const buttonDelete = () => {

        let newFavorites = favorites;
        newFavorites.favorites.splice(favoriteIndex, 1)
        console.log(newFavorites)

        dispatch({type: 'DELETE_FAVORITE', payload: newFavorites.favorites})
        setModuleBox(false)
    }

    return(
        <div className={Style.container}>

            <div className={Style.head}>

                <h1 className={Style.title}>{title}</h1>

                <Delete onClick={changeModuleBox}/>

            </div>

            <div>
                {
                    cryptos && 
                        cryptos.filter((value) => {

                            return favoriteCoins.find(coin => coin === value.symbol)

                        }).map((value, index) => {

                            return (
                                <Crypto
                                    key={`${index}-${value.title}`}
                                    image={value.image}
                                    symbol={value.symbol}
                                    price={value.current_price}
                                    range={value.total_volume}
                                    hight24={value.high_24h}
                                    favoriteIndex={favoriteIndex}
                                />
                            )
                                
                        })
                }
            </div>

            {
                isModuleBox && 
                    <ModuleBox 
                        title={'Listeyi silmek üzeresin!'}
                        text={`${title}'i silmek istediğine emin misin?`}
                        closeFunction={setModuleBox}
                    >
                        <div className={Style.modalBody}>
                            <Button onClick={buttonCancel}>İptal</Button>
                            <Button onClick={buttonDelete} light color="red">Sil</Button>
                        </div>
                    </ModuleBox>
            }

        </div>
    )
}