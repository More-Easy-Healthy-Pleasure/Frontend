import React, {useState} from "react";
import "./PriceContainer.css"
import price from "./price.json";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import CurrentContainer from "./Current.jsx";


function PriceContainer() {
    const {data} = price;

    const priceData = data.map(item => {
        const totalPrice = item.ingredients.reduce((acc, cur) => acc + cur.price, 0);
        return {
            id: item.id,
            totalPrice: totalPrice,
            name: item.name,
            img: item.img,
            ingredients: item.ingredients
        };
    });

    const [showModal, setShowModal] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState('');

    const handleShowModal = (ingredients) => {
        setShowModal(true);
        setSelectedIngredient(ingredients);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <div className="wrap">
                <h5>레시피 예상 가격</h5>
                <hr/>
            </div>
            <div className="card-wrap">
                <div className="price-card">
                    {priceData.map((recipe, index) => (
                        <Card key={index} className="bg-light text-dark" style={{width: '18rem', marginBottom: '20px'}}>
                            {/*이미지 공간*/}
                            <Card.Img src={recipe.img} alt={recipe.name}
                                      style={{filter: "brightness(0.9)", width:'18rem',height:'10rem',objectFit: 'cover'}}/>
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    {recipe.ingredients.map((ingredient, idx) => (
                                        <div key={idx} className="price-wrap">
                                            <Row>
                                                <Col xs={12} md={8}>
                                                    <div className="price-info">
                                                        <p>{ingredient.item}</p>
                                                        <p>{ingredient.price.toLocaleString()}원</p>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <Card.Link onClick={() => handleShowModal(ingredient.item)}>가격 추세</Card.Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                                    <hr/>
                                    <p>Total: {recipe.totalPrice.toLocaleString()}원</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                {showModal && <CurrentContainer show={showModal} handleClose={handleCloseModal} ingredientName={selectedIngredient} />}
            </div>
        </div>
    )
}

export default PriceContainer;