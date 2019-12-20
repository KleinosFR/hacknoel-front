import React from "react";
import { Button, Row, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { storeToken, setUser } from "../reducers/actions";

function LoginForm({ storeToken, setUser, roles, isAuth }) {
    let history = useHistory();

    const handleSignGithub = e => {
        e.preventDefault();
        storeToken("JulesBonard");
        history.push("/sign");
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
                    Sign in with Github
                </Button>
            </Row>
            <Row style={{ textAlign: "center" }}>
                <Button onClick={handleSignGoogle} disabled>
                    <Icon left>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Icon>
                    Sign in with Google
                </Button>
            </Row>
        </Row>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        storeToken: token => dispatch(storeToken(token)),
        setUser: user => dispatch(setUser(user))
    };
};

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        roles: state.userReducer.roles
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
