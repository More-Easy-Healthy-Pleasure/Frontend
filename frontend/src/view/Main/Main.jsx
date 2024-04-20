import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './Main.css';
import Navibar from "../../Component/Navibar";

function Main() {
    return (
        <>
            <div className="main-top-container">
                <Row className="main-container green" style={{height: "33vh"}}>
                    <Row>
                        <div className="fade-in-out" >
                            더 쉽고,
                        </div>
                    </Row>
                    <Row className="green">
                        <Button
                            variant="outline-light"
                            className="fade-in-out"
                            style={{ width: "40%", marginLeft: "auto", marginRight: "auto", marginTop: "-3%" }}>
                            레시피 추천받기
                        </Button>
                    </Row>
                </Row>
                <Row className="main-container white" style={{height: "33vh"}}>
                    <div className="fade-in-out"> 더 싸게,</div>
                    <Row className="white">
                        <Button
                            variant="outline-dark"
                            className="fade-in-out"
                            style={{ width: "40%", marginLeft: "auto", marginRight: "auto", marginTop: "-3%" }}>
                            시세 확인하기
                        </Button>
                    </Row>
                </Row>
                <Row className="main-container split" style={{height: "33vh"}}>
                    <Col className="green-text">당신의 헬시플레</Col>
                    <Col className="white-text">저를 지키세요.</Col>
                </Row>
                <Row className="main-container" style={{marginTop:"-1%"}}>
                    <Row 
                        className="nav-container fade-in-out"
                        style={{ marginTop: "-5%", width:"100%" }}>
                        <Navibar></Navibar>
                    </Row>
                    <Row className="main-container white" style={{ height: "45vh"}}>
                        <div
                            className="fade-in-out"
                            style={{ fontSize: "2rem" }}
                        >
                            건강을 담다, 건담.
                        </div>
                    </Row>
                </Row>
            </div>
        </>

    );
}

export default Main;
