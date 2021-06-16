import {Col, Container, Row} from "react-bootstrap";

const About = () => {
    return (
        <Container fluid style={{paddingTop: '2rem'}}>
            <Row>
                <Col xs={12}>
                    <div className="about">
                        <p>
                            Our Universe is stunning! And it's a pity we don't see it's
                            beauty!
                        </p>
                        <p>
                            This app is aiming to display incredible pictures of what is
                            happening in around our planet.
                        </p>
                        <p>
                            The source is
                            <a href="https://apod.nasa.gov/apod/astropix.html" target="blank"> APOD (Astronomy picture
                                of the Day </a>
                            website where we take the most spectacular picture of the day!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;