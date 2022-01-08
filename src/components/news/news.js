import { Col, Container, Row } from 'react-bootstrap'
import { useNew } from '../../context/newsContext'
import New from './new/new'
import Style from './news.module.css'

export default function News () {

    const {news} = useNew()

    return(
        <div className={Style.container}>
            <h1 className={Style.title}>Haberler</h1>

            <div className={Style.content}>
                <Container>
                    <Row>
                        {
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