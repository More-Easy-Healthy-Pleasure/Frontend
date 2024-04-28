import React from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import './Recipe.css';

function TotalRecipe() {
    return (
        <>
            <Tabs
                defaultActiveKey="Salad"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Salad" title="Salad">
                    Tab content for salad
                </Tab>
                <Tab eventKey="Poke" title="Poke">
                    Tab content for poke
                </Tab>
                <Tab eventKey="Kito" title="Kito">
                    Tab content for Kito
                </Tab>
                <Tab eventKey="Korean" title="Korean">
                    Tab content for Korean
                </Tab>
                <Tab eventKey="Japanese" title="Japanese">
                    Tab content for Japanese
                </Tab>
                <Tab eventKey="Chinese" title="Chinese">
                    Tab content for Chinese
                </Tab>
                <Tab eventKey="Western" title="Western">
                    Tab content for Western
                </Tab>
            </Tabs>
        </>
    );
}

export default TotalRecipe;
