import React from "react";
import { Modal, Button } from "react-materialize";
import { useHistory } from "react-router-dom";

function ButtonOption() {
    const history = useHistory();

    const handleDirectionOption = e => {
        e.preventDefault();
        history.push("/options");
    };
    return (
        <Button onClick={handleDirectionOption} node="a" waves="light">
            Options
        </Button>
    );
}

export default ButtonOption;
