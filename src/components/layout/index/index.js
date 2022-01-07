import Style from './index.module.css'

import { Container, Row, Col } from 'react-bootstrap'

import Nav from '../../nav/nav'
import News from '../../news/news'
import Cryptos from '../../crypto-list/cryptos'
import Favorites from '../../favorites/favorites'

export default function Index () {

    return(
        <>
            <Nav/>

            <Container className={Style.container}>

                <Row className='h-100'>

                    <Col className='h-100' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <News/>
                    </Col>

                    <Col className='h-100' xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <Cryptos/>
                    </Col>

                    <Col className='h-100' xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <Favorites/>
                    </Col>

                </Row>
            </Container>

        </>
    )
}