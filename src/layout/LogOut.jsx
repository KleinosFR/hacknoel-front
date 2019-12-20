import React from "react";
import { Button } from "react-materialize";
import { useHistory } from "react-router-dom";

function ButtonLogOut() {
    const history = useHistory();

    const handleDirectionOption = e => {
        e.preventDefault();
        history.push("/");
    };
    return (
        <Button onClick={handleDirectionOption} node="a" waves="light">
            Log Out
        </Button>
    );
}

export default ButtonLogOut;
