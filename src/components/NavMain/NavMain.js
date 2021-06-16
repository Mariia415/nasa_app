import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";


import './NavMain.css';
import spaceLogo from './logo.png';

const NavMain = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>

                    <Navbar.Brand>
                        <Link to='/'>
                            <img
                                src={spaceLogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Space logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto nav-items">
                        <Link to='/'>News</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/about'>About</Link>
                    </Nav>

                </Container>

            </Navbar>
        </div>
    );
}

export default NavMain;