import React from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import './Recipe.css';
import SaladContent from "./Salad/SaladContent";

function TotalRecipe() {
    return (
        <>
            <Tabs
                defaultActiveKey="Salad"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Salad" title="샐러드">
                    <SaladContent></SaladContent>
                </Tab>
                <Tab eventKey="Poke" title="포케">
                    Tab content for poke
                </Tab>
                <Tab eventKey="Kito" title="키토 식단">
                    Tab content for Kito
                </Tab>
                <Tab eventKey="Korean" title="한식">
                    Tab content for Korean
                </Tab>
                <Tab eventKey="Japanese" title="일식">
                    Tab content for Japanese
                </Tab>
                <Tab eventKey="Chinese" title="중식">
                    Tab content for Chinese
                </Tab>
                <Tab eventKey="Western" title="양식">
                    Tab content for Western
                </Tab>
            </Tabs>
        </>
    );
}

export default TotalRecipe;
