import React from "react";
import { NavItem } from "react-materialize";
import ButtonOption from "./ButtonOption";
import ButtonLogOut from "./LogOut";
import { connect } from "react-redux";

function Buttons({ isAuth }) {
    if (isAuth) {
        return (
            <>
                <NavItem>
                    <ButtonOption />

                    <ButtonLogOut />
                </NavItem>
            </>
        );
    } else {
        return <></>;
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth
    };
};

export default connect(mapStateToProps)(Buttons);
