import React from "react";

import { Modal, Button } from 'react-materialize';
import Tableau from "./Table";



function Recap() {
  
    return (
       <div className="center-align">
        <Modal 
    actions={[
      <Button  flat modal="close" node="button" waves="green">Close</Button>
    ]}
    bottomSheet={false}
    fixedFooter={false}
    header="Présence de la semaine"
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
    trigger={<Button style={{width:"80px", marginBottom:"50px", marginTop:"150px"}}node="button">RECAP</Button>}
  >
    <Tableau/>
  </Modal>
  </div>
    )
}

export default Recap 
