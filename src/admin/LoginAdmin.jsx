import React, { useState } from "react";
import { Row, TextInput, Button, Icon } from "react-materialize";
import Container from "react-materialize/lib/Container";
import { useHistory } from "react-router-dom";
import Layout from "../layout/Layout";

import apiCall from "../ApiCall";

export default function LoginAdmin() {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPass, setInputPass] = useState("");

    let history = useHistory();

    const handleClick = () => {
        apiCall.get("/users").then(res => {
            const data = res.data;
            console.log(data);
            const user = data.filter(
                user =>
                    (user.username === inputLogin) &
                    (user.password === inputPass)
            );
            console.log(user);
            if (user.length > 0) {
                history.push("/backoffice");
            } else {
                history.push("/");
            }
        });
    };

    return (
        <Layout>
            <Container style={{ marginTop: "250px" }}>
                <TextInput
                    label="Username"
                    onChange={e => setInputLogin(e.target.value)}
                />

                <TextInput
                    label="Password"
                    password
                    onChange={e => setInputPass(e.target.value)}
                />

                <Row style={{ textAlign: "center" }}>
                    <Button node="button" waves="light" onClick={handleClick}>
                        Submit
                        <Icon right>send</Icon>
                    </Button>
                </Row>
            </Container>
        </Layout>
    );
}
