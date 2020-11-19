import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Container className="text-center align-items-center">
      <Row className="py-3 align-items-center">
        <Col sm={{ size: "auto", offset: 1 }}>
          <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }}>
          <Link to="/destParis">
            <Button outline color="danger" className="mx-5">
              PARIS
            </Button>
          </Link>
          <Button outline color="danger">
            BORDEAUX
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
