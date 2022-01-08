import Style from './detail.module.css'

import Chart from '../../chart/chart';
import Nav from '../../nav/nav';
import { Col, Container, Row } from 'react-bootstrap';
import News from '../../news/news';

export default function Detail () {

    return(
        <>
            <Nav/>

            <Container>

                <Row className={Style.row}>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Chart/>
                    </Col>

                    <Col className='h-100' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <News/>
                    </Col>

                </Row>
            </Container>

        </>
    )
}