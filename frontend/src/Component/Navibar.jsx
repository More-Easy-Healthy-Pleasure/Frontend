import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import './Navibar.css'

function Navibar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className="me-auto">
                        건담
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="navibar-menu" href="#home">시세 확인</Nav.Link>
                        <Nav.Link className="navibar-menu" href="#features">레시피 확인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Navibar;
