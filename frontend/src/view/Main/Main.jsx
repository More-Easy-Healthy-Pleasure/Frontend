import React from "react";
import './Main.css';

function Main() {
    return (
        <div className="main-container">
            <div className="container green">
                <div className="fade-in-out">
                    더 쉽고,
                </div>
            </div>
            <div className="container white">
                <div className="fade-in-out">더 싸게,</div>
            </div>
            <div className="container split">
                <div className="col green-text">당신의 헬시플레</div>
                <div className="col white-text">저를 지키세요.</div>
            </div>
            <div className="container">
                <div className="container white">
                    <div className="fade-in-out">건강을 담다, 건담.</div>
                </div>
            </div>
        </div>
    );
}

export default Main;
