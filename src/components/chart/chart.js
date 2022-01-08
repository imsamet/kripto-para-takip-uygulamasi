import Style from './chart.module.css'

import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto' //Kullanılmıyor gibi görünüyor fakal kaldırınca cart çalışmıyor.
import { useEffect, useState } from 'react';
import axios from 'axios';
import cn from 'classnames'
import Button from '../button/button';
import { useCrypto } from '../../context/cryptoContext';

export default function ChartLine () {

    const [dateRange, setDateRange] = useState("year") // cart tarih aralığı. Değerler day, week, month, year
    const [labels, setLabels] = useState([]) // cart'ın tarih bölümü. Apiden gelen datalar ekleniyor
    const [data, setData] = useState([]) // cart'a gönderilen data.
    const { cryptoId } = useParams(); // url'den gelen coin id'si
    const {cryptos} = useCrypto() //global state'teki criptolar
    const [crypto, setCrypto] = useState([]) // global state'ten filtrelenen coin bilgileri

    useEffect(() => { // coin listesinden sayfaya gelen coinId'ye göre filtreleme yapıldığı yer

        let newCrypto = cryptos ? cryptos.filter((value) => {
            return value.id === cryptoId
        })
        : []

        setCrypto(newCrypto[0])

    }, [cryptos, cryptoId])

    useEffect(() => { // cart için gerekli data'ların çekildiği yer. 
        const day = dateRange === "day" ? 1 : dateRange === "week" ? 7 : dateRange === "month" ? 30 : dateRange === "year" && 365

        axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${day}`)
            .then(response => {
                let newLabels = [], newData = []

                response.data.prices.forEach((value) => {
    
                    const date = new Date(value[0]).toDateString()
                    newLabels.push(date)
    
                    newData.push(value[1])
                    
                })
        
                setLabels(newLabels)
                setData(newData)
            })

    }, [dateRange, cryptoId])


    const changeDate = (e) => {// caet'ın tarih aralığının değiştirildiği yer. Button'lara ekleniyor, buttonların value'sünü alıyor.
        setDateRange(e.target.value)
    }

    const datas = { // cart'ın propsları
        labels: labels,
        datasets: [
            {
            label: "",
            backgroundColor: '#22bdff66',
            borderColor: '#22bdff',
            data: data,
            fill: true
            },
        ],
    };

    const options = {//cart'ın propsları
        responsive: true,
        maintainAspectRatio: true
    };

    return(
        <div className={Style.container}>

            {
                crypto &&
                    <div className={Style.head}>
                        <img src={crypto.image} alt={crypto.name}/>
                        <h1 className={Style.title}>{crypto && crypto.name}</h1>

                        <div className={cn(crypto.price_change_24h >= 0 ? Style.green : Style.red)}>
                            
                            <span className={Style.price}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 10}).format(crypto.current_price)}</span>

                            <div>

                                <span className={Style.percent}>{`%${Math.round((crypto.price_change_percentage_24h + Number.EPSILON) * 100) / 100}($${Math.round((crypto.price_change_24h + Number.EPSILON) * 100) / 100})`}</span>

                            </div>

                        </div>
                        
                        <div className={Style.rangeBox}>
                            <span className={Style.rangeTitle}>Toplam Hacim:</span>
                            <span className={Style.range}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 15}).format(crypto.total_volume)}</span>
                        </div>

                    </div>
            }

            <Line
                data={datas}
                options={options}
            />

            <div className={Style.buttonBox}>
                <Button 
                    value={"day"} 
                    color={dateRange === "day" && "blue"}
                    onClick={changeDate}
                >
                    Günlük
                </Button>

                <Button 
                    value={"week"} 
                    color={dateRange === "week" && "blue"}
                    onClick={changeDate}
                >
                    Haftalık
                </Button>

                <Button 
                    value={"month"} 
                    color={dateRange === "month" && "blue"}
                    onClick={changeDate}
                >
                    Aylık
                </Button>

                <Button 
                    value={"year"} 
                    color={dateRange === "year" && "blue"}
                    onClick={changeDate}
                >
                    Yıllık
                </Button>

            </div>
        </div>
    )
}