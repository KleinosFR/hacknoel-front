import React from "react";
import { Button, Container, Row, Icon, Col } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

function SignupForm() {
    const history = useHistory();

    const handleSignGithub = e => {
        e.preventDefault();
        console.log("github method");
    };

    const handleSignGoogle = e => {
        e.preventDefault();
        console.log("google method");
    };

    return (
        <Row>
        <Row style={{ textAlign: "center" }}>
            <Button onClick={handleSignGithub}>
                <Icon left>
                    <FontAwesomeIcon icon={faGithub} />
                </Icon>
                Sign up with Github
            </Button>
        </Row>
        <Row style={{ textAlign: "center" }}>
            <Button onClick={handleSignGoogle}>
                <Icon left>
                    <FontAwesomeIcon icon={faGoogle} />
                </Icon>
                Sign up with Google
            </Button>
        </Row>
    </Row>
    );
}

export default SignupForm;
