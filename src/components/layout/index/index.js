import Style from './style.module.css'

import { Container, Row, Col } from 'react-bootstrap'
import Nav from '../../nav/nav'

export default function Index () {

    return(
        <>
            <Nav/>
            <Container>

                <Row>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    xs=12 md=8
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                    xs=6 md=4
                    </Col>
                </Row>
            </Container>
        </>
    )
}