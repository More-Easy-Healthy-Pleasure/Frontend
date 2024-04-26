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
            <RecipeContainer></RecipeContainer>
            <Footer></Footer>
        </>

    );
}

export default Recipe;
