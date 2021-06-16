import useFetch from "../hooks/useFetch";
import NewsList from "./NewsList";
import {Col, Container, Row} from "react-bootstrap";


const NewsListContainer = () => {
    const {data: news, error} = useFetch();

    return (
        <Container fluid style={{paddingTop: '2rem'}}>
            <Row>
                <Col xs={12}>
                    <NewsList news_arr={news} err={error}/>
                </Col>
            </Row>
        </Container>
    )
}

export default NewsListContainer;