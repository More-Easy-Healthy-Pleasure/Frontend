import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Main.css';

import Navibar from "../../Component/Navibar";
import Footer from "../../Component/Footer";

function Main() {

    const navigate = useNavigate();

    function moveRecipe(){
        navigate('/recipe')
    }

    function movePrice(){
        navigate('/price')
    }

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
                            onClick={moveRecipe}
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
                            onClick={movePrice}
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
                <Row className="main-container">
                    <Row 
                        className="nav-container"
                        style={{ width:"100%" }}>
                        <Navibar></Navibar>
                    </Row>
                    <Row className="main-container fade-in-out white" style={{ height: "80vh"}}>
                        <div
                            className="fade-in-out"
                            style={{ fontSize: "2rem" }}
                        >
                            건강을 담다, 건담.
                        </div>
                    </Row>
                </Row>
                <Footer></Footer>
            </div>
        </>

    );
}

export default Main;
