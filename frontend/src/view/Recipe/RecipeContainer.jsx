import React from "react";
import { Accordion } from "react-bootstrap";
import './Recipe.css';

import SearchBar from "./SearchBar";

function RecipeContainer() {
  
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>🔎 레시피 검색</Accordion.Header>
                    <Accordion.Body>
                        <SearchBar></SearchBar>
                    </Accordion.Body>
                
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
