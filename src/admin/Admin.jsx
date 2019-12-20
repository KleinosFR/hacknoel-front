import React from "react";
import { SideNav, SideNavItem, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCalendar,
  faSurprise
} from "@fortawesome/free-solid-svg-icons";

function Admin() {
  return (
    <>
      <SideNav>
        <SideNavItem
          user={{
            background:
              "data:image/png;base64,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",
            email: "jdandturk@gmail.com",
            name: "John Doe"
          }}
          userView
        />
        <SideNavItem href="#!second">
          <Icon left>
            <FontAwesomeIcon icon={faList} />
          </Icon>
          Liste des élèves
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem href="#!third">
          <Icon left>
            <FontAwesomeIcon icon={faCalendar} />
          </Icon>
          Feuilles d'émargement
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem href="#!third">
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
