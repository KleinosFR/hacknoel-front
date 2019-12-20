import React, { useState, useRef } from "react";
import { Button, Row, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import Container from "react-materialize/lib/Container";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./sigCanvas.css";

function Push() {
    const [imageURLAM, setImageURLAM] = useState(null);
    const [imageURLPM, setImageURLPM] = useState(null);

    const sigCanvasAM = useRef({});
    const sigCanvasPM = useRef({});

    const clearAM = () => sigCanvasAM.current.clear();
    const clearPM = () => sigCanvasPM.current.clear();

    const saveAM = () => {
        setImageURLAM(
            sigCanvasAM.current.getTrimmedCanvas().toDataURL("image/png")
        );
        console.log(
            sigCanvasAM.current.getTrimmedCanvas().toDataURL("image/png")
        );
    };

    const savePM = () =>
        setImageURLPM(
            sigCanvasPM.current.getTrimmedCanvas().toDataURL("image/png")
        );

    return (
        <>
            <Container style={{ marginTop: "250px" }}>
                <Row className="center-align">
                    <Popup
                        modal
                        trigger={
                            <Button className style={{ width: "200px" }}>
                                <Icon left>
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
                                    ref={sigCanvasAM}
                                    canvasProps={{
                                        className: "signatureCanvas"
                                    }}
                                />
                                <button onClick={clearAM}>clear</button>
                                <button onClick={close}>close</button>
                                <button onClick={saveAM}>save</button>
                            </>
                        )}
                    </Popup>
                    <br />
                    <br />
                    {imageURLAM ? (
                        <img
                            src={imageURLAM}
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
                    <Popup
                        modal
                        trigger={
                            <Button className style={{ width: "200px" }}>
                                <Icon left>
                                    <FontAwesomeIcon icon={faSignature} />
                                </Icon>
                                Après-midi
                            </Button>
                        }
                        closeOnDocumentClick={false}
                    >
                        {close => (
                            <>
                                <SignaturePad
                                    ref={sigCanvasPM}
                                    canvasProps={{
                                        className: "signatureCanvas"
                                    }}
                                />
                                <button onClick={clearPM}>clear</button>
                                <button onClick={close}>close</button>
                                <button onClick={savePM}>save</button>
                            </>
                        )}
                    </Popup>
                    <br />
                    <br />
                    {imageURLPM ? (
                        <img
                            src={imageURLPM}
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
            </Container>
        </>
    );
}

export default Push;
