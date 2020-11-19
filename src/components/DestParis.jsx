import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Filtertools from "./FilterTools";
import InteractiveMap from "./InteractiveMap";

function DestParis() {
  return (
    <Container className="w-100">
      <Row className="py-3">
        <Col>
          <h2>
            <strong>
              Here are the lists of the differents network of Paris{" "}
            </strong>
          </h2>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }}>
          <Link to="/">
            <Button outline color="danger">
              Go back Home
            </Button>
          </Link>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }}>
          <Filtertools />
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
