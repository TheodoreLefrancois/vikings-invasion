import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import RaidAdvisor from "../image/RaidAdvisor.jpg";

function DestParis() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={RaidAdvisor} alt="Paris Plan" />
        </Col>
        <Col>
          <h2>Here are the plans of Paris</h2>
        </Col>
        <Col>
          <Link to="/">
            <Button color="warning">Go back Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default DestParis;
