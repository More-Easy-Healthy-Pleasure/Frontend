import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import './Navibar.css'

function Navibar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/" className="me-auto">
                        <img
                            id = "navibar-logo" 
                            src="/img/top_logo.png"></img>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="navibar-menu" href="/price">시세 확인</Nav.Link>
                        <Nav.Link className="navibar-menu" href="/recipe">레시피 확인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <hr style={{ borderColor: "#65A938" }} />
        </>
    );
}

export default Navibar;
