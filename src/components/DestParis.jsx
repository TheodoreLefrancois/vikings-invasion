import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Filtertools from "./FilterTools";

function DestParis() {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          <h3>Here are the lists of the differents network of Paris </h3>
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
    </Container>
  );
}

export default DestParis;
