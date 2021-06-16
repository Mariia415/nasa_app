import useFetch from "../hooks/useFetch";
import PictureList from "./PictureList";

import './PictureListContainer.css';
import {Col, Container, DropdownButton, Row, Dropdown} from "react-bootstrap";

const PictureListContainer = ({galleryTheme, setGalleryTheme}) => {
    const {data: pictures, error} = useFetch();

    return (
        <Container fluid style={{paddingTop: '2rem', minHeight: '100vh'}} className={galleryTheme}>
            <Row>
                <Col xs={12} style={{marginBottom: '1rem'}}>
                    <DropdownButton onSelect={(evt) => setGalleryTheme(evt)} id="dropdown-basic-button"
                                    title="Change Gallery Theme">
                        <Dropdown.Item eventKey="dark">Dark</Dropdown.Item>
                        <Dropdown.Item eventKey="light">Light</Dropdown.Item>
                        <Dropdown.Item eventKey="peru">Peru</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <PictureList pictures={pictures} err={error}/>
                </Col>
            </Row>
        </Container>
    )
}

export default PictureListContainer;