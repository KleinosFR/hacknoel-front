import React from "react";

import { Table, Icon } from 'react-materialize';
import { faCheck, faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"



function Tableau() {
  
    return (
      <Table className="responsive">
        <caption>Feuille d'émargement hebdomadaire</caption>
      <thead>
        <tr>
          <th colspan="2" className="center-align">Lundi</th>
          <th colspan="2" className="center-align"> Mardi</th>
          <th colspan="2" className="center-align">Mercredi</th>
          <th colspan="2" className="center-align">Jeudi</th>
          <th colspan="2" className="center-align">Vendredi</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th >AM</th>
          <th >PM</th>
          <th >AM</th>
          <th >PM</th>
          <th >AM</th>
          <th >PM</th>
          <th >AM</th>
          <th >PM</th>
          <th >AM</th>
          <th >PM</th>         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <Icon >
              <FontAwesomeIcon icon={faCheck} />
          </Icon>
          </td>
          <td>
          <Icon >
              <FontAwesomeIcon icon={faHandMiddleFinger} />
          </Icon>
          </td>
          <td>
            
          </td>
          <td>
            
          </td>
          <td>
            
          </td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Tableau 
