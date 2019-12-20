import React, { useState } from "react";
import Admin from "./Admin";
import { Row, Col } from "react-materialize";

import BackOfficePage from "./BackOfficePage";
import Layout from "../layout/Layout";

function BackOffice() {
    const [items, setItems] = useState(2);

    const handleSelect = choice => {
        switch (choice) {
            case 1:
                setItems(1);
                break;

            case 2:
                setItems(2);
                break;

            default:
                break;
        }
    };

    return (
        <Layout>
            <Row>
                <Col l={2}>
                    <Admin select={handleSelect} />
                </Col>
                <Col l={10} s={12}>
                    <BackOfficePage item={items} />
                </Col>
            </Row>
        </Layout>
    );
}

export default BackOffice;
