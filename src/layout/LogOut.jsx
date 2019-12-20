import React from "react";
import { Button } from "react-materialize";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { removeToken } from "../reducers/actions";

function ButtonLogOut({ logOut }) {
    const history = useHistory();

    const handleLogOut = e => {
        e.preventDefault();
        history.push("/");
        logOut();
    };
    return (
        <Button onClick={handleLogOut} node="a" waves="light">
            Log Out
        </Button>
    );
}

const mapdispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(removeToken())
    };
};

export default connect(null, mapdispatchToProps)(ButtonLogOut);
