import React, {useEffect, useState} from "react";
import current from "./current.json";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, tickFormatter
} from 'recharts';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Current.css"
import data from "bootstrap/js/src/dom/data";

function CurrentContainer({ show, handleClose, ingredientName}) {
    const [selectedData, setSelectedData] = useState(null);
    const { data } = current;
    const ingredientData = data.find(item => item.hasOwnProperty(ingredientName));

    // 모달을 열기 전에 선택된 데이터를 설정합니다.
    useEffect(() => {
        if (ingredientData) {
            setSelectedData(ingredientData);
        }
    }, [ingredientData]);

    // 가격 format
    const formatPrice = (price) => price.toLocaleString() + "원";
    const formatDate = (date) => {
        const parts = date.split("-");
        return parts[0].substr(-2) +"."+ parts[1] +"."+ parts[2]
    };


    // selectedData가 없을 경우 모달에 "상품 정보 없음"을 표시
    if (!selectedData) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>상품 정보 없음</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    해당 상품의 정보를 찾을 수 없습니다.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    // selectedData가 있는 경우 모달에 LineChart 표시
    return (
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>{ingredientName}의 최근 5일간 가격 추세</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="content-wrapper">
                    <LineChart
                        width={600}
                        height={300}
                        data={selectedData[ingredientName]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={formatDate}/>
                        <YAxis tickFormatter={formatPrice}/>
                        <Tooltip formatter={formatPrice} />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CurrentContainer;