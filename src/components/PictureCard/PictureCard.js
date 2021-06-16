import {Card} from "react-bootstrap";

const PictureCard = ({content}) => {
    const {url, explanation, title, copyright} = content;

    return (
        <>
            <Card.Img variant="top" src={url} alt={explanation}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {explanation}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                { copyright && (<small className="text-muted">Copyright: {copyright}</small>)}
            </Card.Footer>
        </>
    )
}

export default PictureCard;