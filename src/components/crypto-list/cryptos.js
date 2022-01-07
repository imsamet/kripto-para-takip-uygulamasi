import { useEffect, useState, useRef } from 'react'
import {useCrypto} from '../../context/cryptoContext'
import Crypto from './crypto/crypto'
import Style from './cryptos.module.css'
import { Search } from '../icons'

export default function Cryptos () {

    const inputRef = useRef()
    const {cryptos, setCryptos} = useCrypto()
    const [search, setSearch] = useState()

    const inputBoxHandleClick = () => {// inputBox'a tıklandığında da input'a focus almasını sağlıyor.
        inputRef.current.focus()
    }

    const inputChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    
    return(
        <div className={Style.container}>

            <div className={Style.head}>
                <h1 className={Style.title}>Liste</h1>

                <div className={Style.inputBox} onClick={inputBoxHandleClick}>
                    <Search/>
                    <input placeholder='Bitcoin, BTC' onChange={inputChange} ref={inputRef}/>
                </div>
            </div>

            <div className={Style.tableHead}>
                <span>Ad</span>
                <span>Fiyat</span>
                <span>Hacim</span>
            </div>

            <div className={Style.content}>
                {
                    cryptos && 
                        cryptos.filter((value) => {
                            if (search == undefined || search === "") return value;
                            else
                            return value.symbol.toLowerCase().includes(search) || value.name.toLowerCase().includes(search)
                        }).map((value, index) => {

                            return (
                                <Crypto
                                    key={`${index}-${value.title}`}
                                    image={value.image}
                                    symbol={value.symbol}
                                    price={value.current_price}
                                    range={value.total_volume}
                                    hight24={value.high_24h}
                                />
                            )
                                
                        })
                }
            </div>

        </div>
    )
}