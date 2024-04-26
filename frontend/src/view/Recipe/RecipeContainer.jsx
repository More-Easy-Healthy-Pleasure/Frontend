import React, { useState } from "react";
import { Accordion, Form, ListGroup } from "react-bootstrap";
import './Recipe.css';
import data from './data.json'; // 데이터 가져오기

function RecipeContainer() {
    const [searchTerm, setSearchTerm] = useState(""); // 사용자 입력값 상태 설정
    const [selectedRecipe, setSelectedRecipe] = useState(null); // 선택된 레시피 상태 설정

    // 검색어 입력 시 호출되는 함수
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setSelectedRecipe(null); // 검색어 변경 시 선택된 레시피 초기화
    };

    // 검색어와 일치하는 레시피 필터링하는 함수
    const searchRecipes = () => {
        return data.data.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // 레시피 상세 정보 표시하는 함수
    const showRecipeDetails = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>🔎 레시피 검색</Accordion.Header>
                    <Accordion.Body>
                        {/* 검색 폼 */}
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="레시피를 검색하세요! 예) 닭가슴살 샐러드"
                                onChange={handleChange}
                                value={searchTerm}
                            />
                        </Form.Group>
                        {/* 검색 결과 */}
                        {searchTerm !== "" && (
                            <ListGroup>
                                {searchRecipes().map(recipe => (
                                    <ListGroup.Item
                                        key={recipe.id}
                                        onClick={() => showRecipeDetails(recipe)}
                                        action
                                    >
                                        {recipe.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </Accordion.Body>
                    {/* 선택된 레시피의 상세 정보 표시 */}
                    {selectedRecipe && (
                        <div className="recipe-details" style={{width: "80%", margin:"auto"}}>
                            <hr></hr>
                            <h3>{selectedRecipe.name}</h3>
                            <hr></hr>
                            <p>재료: {selectedRecipe.ingredient.join(", ")}</p>
                            <p>칼로리: {selectedRecipe.kcal}</p>
                            <p>레시피: {selectedRecipe.recipe.join(", ")}</p>
                        </div>
                    )}
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>📎 레시피 전체 확인</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default RecipeContainer;
