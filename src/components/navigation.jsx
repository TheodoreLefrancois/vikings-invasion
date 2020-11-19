import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Container className="text-center">
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>
          <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }}>
          <Link to="/destParis">
            <Button outline color="danger">
              PARIS
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
