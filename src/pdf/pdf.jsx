import React from "react";
import Pdf from "react-to-pdf";
import Table from "../options/Table";
import Footers from "../layout/Footers";
import Header from "../layout/Header";
import { Button, Container, Row, Icon, Col } from "react-materialize";

const ref = React.createRef();

function pdf() {
  return (
    <>
    <div className="pdf">

      <div ref={ref}>
        <Header />
        <Table />
          <Row style={{ textAlign: "center", marginTop: "15px" }}>
            <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>
          </Row>
        <Footers />
      </div>
    </div>
    </>
  );
}

export default pdf;
