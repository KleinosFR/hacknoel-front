import React, { useState, useRef, useEffect } from "react";
import { Button, Row, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import Container from "react-materialize/lib/Container";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./sigCanvas.css";

import apiCall from "../ApiCall";

const userId = "6eabe590-dc00-4edf-8bfe-51e6ccb202ed";

function Push() {
    const [imageURLAM, setImageURLAM] = useState(null);
    const [imageURLPM, setImageURLPM] = useState(null);
    const [actualhour, setactualhour] = useState(null);

    const sigCanvasAM = useRef({});
    const sigCanvasPM = useRef({});

    const clearAM = () => sigCanvasAM.current.clear();
    const clearPM = () => sigCanvasPM.current.clear();

    const saveAM = async () => {
        await setImageURLAM(
            sigCanvasAM.current.getTrimmedCanvas().toDataURL("image/png")
        );
        const time = new Date();
        const hour = time.getHours();
        if (hour < 12) {
            apiCall
                .post("/signs", {
                    UserUuid: userId,
                    image: imageURLAM
                })
                .then(res => {})
                .catch(err => {
                    alert("impossible d'envoyer la signature");
                });
        }
    };

    const savePM = async () => {
        const img = sigCanvasPM.current
            .getTrimmedCanvas()
            .toDataURL("image/png");
        await setImageURLPM(
            sigCanvasPM.current.getTrimmedCanvas().toDataURL("image/png")
        );
        apiCall
            .post("/signs", {
                UserUuid: img,
                image: imageURLPM
            })
            .then(res => {})
            .catch(err => {
                alert("impossible d'envoyer la signature");
            });
    };

    useEffect(() => {
        const time = new Date();
        setactualhour(time.getHours());
    }, []);

    return (
        <>
            <Container style={{ marginTop: "250px" }}>
                <Row className="center-align">
                    <Popup
                        modal
                        trigger={
                            <Button
                                className
                                style={{ width: "200px" }}
                                disabled={actualhour > 11}
                            >
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
                                <Button onClick={clearAM}>reset</Button>
                                <Button onClick={close}>fermer</Button>
                                <Button onClick={saveAM}>envoyer</Button>
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
                                <Button onClick={clearPM}>reset</Button>
                                <Button onClick={close}>fermer</Button>
                                <Button onClick={savePM}>envoyer</Button>
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
