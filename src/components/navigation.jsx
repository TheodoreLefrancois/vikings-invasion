import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>

          <Link to="/destParis">
            <Button color="warning">PARIS</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
