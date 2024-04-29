import React, { useState } from "react";
import { Button, Col, Row, Card, Modal } from "react-bootstrap";
import data from "../data.json"; // 데이터 가져오기
import './SaladContent.css';

function SaladContent() {
    const [showModal, setShowModal] = useState(false); // 모달 상태 관리

    const [selectedItem, setSelectedItem] = useState(null); // 선택된 항목 상태 관리

    const handleShowModal = (item) => {
        setSelectedItem(item); // 선택된 항목 설정
        setShowModal(true); // 모달 표시
    };

    const handleCloseModal = () => {
        setSelectedItem(null); // 선택된 항목 초기화
        setShowModal(false); // 모달 숨김
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        {data.data.map(item => {
                            if (item.name.includes("샐러드")) { // "샐러드"를 포함하면 버튼 생성
                                return (
                                    <Col key={item.id}>
                                        <Button variant="outline-secondary" onClick={() => handleShowModal(item)}>
                                            {item.name} 
                                        </Button>
                                    </Col>
                                );
                            } else {
                                return null; // "샐러드"를 포함하지 않으면 null 반환하여 아무것도 렌더링하지 않음
                            }
                        })}
                    </Row>
                </Card.Body>
            </Card>

            {/* 모달 */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedItem && selectedItem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* 여기에 선택된 항목의 내용을 표시하세요 */}
                    {selectedItem && (
                        <>
                            <p>재료: {selectedItem.ingredient.join(", ")}</p>
                            <p>칼로리: {selectedItem.kcal}</p>
                            <p>레시피:</p>
                            <ul>
                                {selectedItem.recipe.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SaladContent;
