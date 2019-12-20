import React from "react";
import { SideNav, SideNavItem, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faCalendar,
    faSurprise
} from "@fortawesome/free-solid-svg-icons";

function Admin({ select }) {
    return (
        <>
            <SideNav>
                <img
                    style={{ width: "300px" }}
                    src="https://upload.wikimedia.org/wikipedia/fr/e/e4/WildCodeSchool_logo_pink_background_400x220.png"
                    alt="logo"
                />

                <SideNavItem onClick={() => select(1)}>
                    <Icon left>
                        <FontAwesomeIcon icon={faList} />
                    </Icon>
                    Liste des élèves
                </SideNavItem>
                <SideNavItem divider />
                <SideNavItem onClick={() => select(2)}>
                    <Icon left>
                        <FontAwesomeIcon icon={faCalendar} />
                    </Icon>
                    Feuilles d'émargement
                </SideNavItem>
                <SideNavItem divider />
                <SideNavItem>
                    <Icon left>
                        <FontAwesomeIcon icon={faSurprise} />
                    </Icon>
                    <a href="http://pipotronic.com/" target="_blank">
                        Clique-moi
                    </a>
                </SideNavItem>
            </SideNav>
        </>
    );
}

export default Admin;
