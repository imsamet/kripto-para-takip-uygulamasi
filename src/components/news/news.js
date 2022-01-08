import { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import { useNew } from '../../context/newsContext'
import { useParams } from 'react-router-dom'
import New from './new/new'
import Style from './news.module.css'
import { useCrypto } from '../../context/cryptoContext'

export default function News () {

    const {news} = useNew()
    const { cryptoId } = useParams()
    const {cryptos} = useCrypto()
    const [coinNews, setCoinNews] = useState()

    useEffect(() => {

        let symbol = cryptos && cryptos.filter((value) => {
            return value.id === cryptoId
        })

        cryptoId && symbol !== undefined && cryptos &&
        axios.get(`https://cryptonews-api.com/api/v1?tickers=${symbol[0].symbol.toUpperCase()}&items=50&token=v406fi1o1sqfdtzxnlhp7uqfo4juosdmnkjstcan`)
            .then(response => setCoinNews(response.data.data))

    }, [cryptoId, cryptos])

    return(
        <div className={Style.container}>
            <h1 className={Style.title}>Haberler</h1>

            <div className={Style.content}>
                <Container>
                    <Row>
                        {
                            cryptoId ? 
                                coinNews && coinNews.map((value, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={`${index}-${value.title}`}>
                                            <New
                                                
                                                index={index + 1}
                                                title={value.title}
                                                paragraph={value.text}
                                                date={value.date}
                                                image={value.image_url}
                                                url={value.news_url}
                                            />
                                        </Col>
                                    )
                                })
                            :
                                news && news.map((value, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={`${index}-${value.title}`}>
                                            <New
                                                
                                                index={index + 1}
                                                title={value.title}
                                                paragraph={value.text}
                                                date={value.date}
                                                image={value.image_url}
                                                url={value.news_url}
                                            />
                                        </Col>
                                    )
                                })
                        }
                    </Row>
                </Container>
            </div>

        </div>
    )
}