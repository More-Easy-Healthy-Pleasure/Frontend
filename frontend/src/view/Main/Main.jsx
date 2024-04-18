import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './Main.css';

function Main() {
    return (
        <div className="main-container">
            <Row className="container green">
                <Row>
                    <div className="fade-in-out">
                        더 쉽고,
                    </div>
                </Row>
                <Row className="green">
                    <Button variant="outline-light">레시피 추천받기</Button>
                </Row>
            </Row>
            <Row className="container white">
                <div className="fade-in-out">더 싸게,</div>
                <Row className="white">
                    <Button variant="outline-dark">시세 확인하기</Button>
                </Row>
            </Row>
            <Row className="container split">
                <Col className="green-text">당신의 헬시플레</Col>
                <Col className="white-text">저를 지키세요.</Col>
            </Row>
            <Row className="container">
                <Row className="container white">
                    <div className="fade-in-out">건강을 담다, 건담.</div>
                </Row>
            </Row>
        </div>
    );
}

export default Main;
