import React from "react";
import { Button, Row, Icon, Modal } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import Form from "./Form"

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
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Inscription"
                    id="modal-0"
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    trigger={<Button onClick={handleSignGithub}>
                        <Icon left>
                            <FontAwesomeIcon icon={faGithub} />
                        </Icon>
                        Sign up with Github
            </Button>}
                >
                    <Form />
                </Modal>


            </Row>
            <Row style={{ textAlign: "center" }}>
                <Button onClick={handleSignGoogle} disabled>
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
