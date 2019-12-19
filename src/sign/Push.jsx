import React, { useState, useRef } from "react";
import { Button, Row, Col, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import Container from "react-materialize/lib/Container";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./sigCanvas.css";

function Push() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  /* const save = () =>
    setImageURL(sigCanvas.getTrimmedCanvas().toDataURL("image/png"));
 */
  return (
    <>
      <Container>
        <Row className="center-align ">
          <Popup
            modal
            trigger={
              <Button className style={{ width: "200px" }}>
                <Icon>
                  <FontAwesomeIcon icon={faSignature} />
                </Icon>
                Matin
              </Button>
            }
            closeOnDocumentClick={false}
          >
            {close => (
              <>
                <SignaturePad
                  ref={sigCanvas}
                  canvasProps={{
                    className: "signatureCanvas"
                  }}
                />
                <button onClick={clear}>clear</button>
                <button onClick={close}>close</button>
                {/* <button onClick={save}>save</button> */}
              </>
            )}
          </Popup>
          <br />
          <br />
          {imageURL ? (
            <img
              src={imageURL}
              alt="ma signature"
              style={{
                display: "block",
                margin: "0 auto",
                border: "1px solid black",
                width: "150px"
              }}
            />
          ) : null}
        </Row>
        <Row className="center-align">
          <Button className style={{ width: "200px" }}>
            <Icon>
              <FontAwesomeIcon icon={faSignature} />
            </Icon>
            Après-midi
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Push;
