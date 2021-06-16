import NewsCard from "../NewsCard/NewsCard";
import {Button, ListGroup, Spinner} from "react-bootstrap";

const NewsList = ({err, news_arr}) => {
    if (err) {
        return <p>Unable to fetch news.</p>
    }

    if (!news_arr?.length) {
        return <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />{' '}
            Loading...
        </Button>
    }

    return (
        <>
            <ListGroup variant="flush">
                {news_arr.map(news => (
                    <ListGroup.Item key={news.title}>
                        <NewsCard content={news}/>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default NewsList;