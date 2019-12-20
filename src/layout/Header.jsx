import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import ButtonOption from "./ButtonOption";
import ButtonLogOut from "./LogOut";
import Buttons from "./Buttons";

function Header() {
    return (
        <Navbar
            alignLinks="right"
            brand={
                <a
                    className="brand-logo"
                    href="/"
                >
                    <img
                        style={{ width: "100px" }}
                        src="https://upload.wikimedia.org/wikipedia/fr/e/e4/WildCodeSchool_logo_pink_background_400x220.png"
                    ></img>
                </a>
            }
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: "left",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="https://www.wildcodeschool.com/fr-FR/campus/biarritz">
                Campus
            </NavItem>
            <NavItem href="https://odyssey.wildcodeschool.com/">
                Odyssey
            </NavItem>
            <Buttons />

        </Navbar>
    );
}

export default Header;
