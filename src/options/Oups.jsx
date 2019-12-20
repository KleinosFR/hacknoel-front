import React from "react";
import { Modal, Button } from 'react-materialize';

function Oups() {
    return <div className="center-align">
        <Modal 
    actions={[
      <Button flat modal="close" node="button" waves="green">Close</Button>
    ]}
    bottomSheet={false}
    fixedFooter={false}
    header="Oups"
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
    trigger={<Button style={{width:"80px"}} node="button">OUPS</Button>}
  >
<img style={{ width: "100%" }} src="http://images.innoveduc.fr/symfony4/8-fixtures/fixtures_wtf_three.gif"></img>
  </Modal>
  </div>;
}

export default Oups