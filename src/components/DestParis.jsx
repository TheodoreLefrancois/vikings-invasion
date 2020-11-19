import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import RaidAdvisor from "../image/RaidAdvisor.jpg";

function DestParis() {
  return (
    <Container>
      <Row>
        <Link to="/">Go back Home</Link>
        <h2>Here are the plans of Paris</h2>
        <img src={RaidAdvisor} alt="Paris Plan" />
      </Row>
    </Container>
  );
}

export default DestParis;
