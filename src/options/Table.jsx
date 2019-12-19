import React from "react";

import { Table } from 'react-materialize';



function Tableau() {
  
    return (
      <Table className="responsive">
      <thead>
        <tr>
          <th >Lundi</th>
            <tr><th>Am</th><th>PM</th></tr>
          <th > Mardi</th>
          <th >Mercredi</th>
          <th >Jeudi</th>
          <th >Vendredi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Alvin
          </td>
          <td>
            Eclair
          </td>
          <td>
            $0.87
          </td>
        </tr>
        <tr>
          <td>
            Alan
          </td>
          <td>
            Jellybean
          </td>
          <td>
            $3.76
          </td>
        </tr>
        <tr>
          <td>
            Jonathan
          </td>
          <td>
            Lollipop
          </td>
          <td>
            $7.00
          </td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Tableau 
