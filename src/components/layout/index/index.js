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

            <Container>

                <Row className={Style.row}>

                    <Col className='h-100' xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Cryptos/>
                    </Col>

                    <Col className='h-100' xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Favorites/>
                    </Col>

                    <Col className='h-100' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <News/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}