import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>
        </Col>
        <Link to="/destParis">PARIS</Link>
      </Row>
    </Container>
  );
}

export default Navigation;
