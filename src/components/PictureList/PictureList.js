import PictureCard from "../PictureCard/PictureCard";
import {Button, Card, CardColumns, Spinner} from "react-bootstrap";


const PictureList = ({err, pictures, galleryTheme}) => {
    console.log(galleryTheme, 'gall')
    if (err) {
        return <p>Unable to fetch pictures.</p>
    }

    if (!pictures?.length) {
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
        <div className={galleryTheme}>
            <CardColumns>
                {pictures.map(picture => (
                    <Card key={picture.title}>
                        <PictureCard content={picture}/>
                    </Card>
                ))}
            </CardColumns>
        </div>
    )
}

export default PictureList;