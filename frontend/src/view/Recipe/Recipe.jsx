import React from "react";
// import { Button, Col, Row } from "react-bootstrap";
import './Recipe.css';

import Navibar from "../../Component/Navibar";
import Footer from "../../Component/Footer";
import RecipeContainer from "./RecipeContainer";

function Recipe() {
    return (
        <>
            <Navibar></Navibar>
            <div id="recipe-contents">
                <RecipeContainer></RecipeContainer>
            </div>
            
            <Footer></Footer>
        </>

    );
}

export default Recipe;
