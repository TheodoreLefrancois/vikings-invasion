import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Filtertools from "./FilterTools";
import InteractiveMap from "./InteractiveMap";

function DestParis() {
  return (
    <Container className="w-100">
      <Row>
        <Col>
          <h2>
            <strong>Here are the plans of Paris</strong>
          </h2>
        </Col>
        <Col>
          <Link to="/">
            <Button color="warning">Go back Home</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="col-3">
          <Filtertools />
        </Col>
        <Col className="col-9">
          <InteractiveMap />
        </Col>
      </Row>
    </Container>
  );
}

export default DestParis;
