import { Link } from "react-router-dom";
import { Button, UncontrolledCollapse } from "reactstrap";
import Footer from "./Footer";
import ImportWeather from "./ImportWeather";

function DestBordeaux(props) {
  const id = 580778;

  return (
    <>
      <Link to="/">
        <Button color="warning">Go back Home</Button>
      </Link>
      <Button
        outline
        color="danger"
        id="toggler"
        style={{ marginBottom: "1rem" }}
      >
        Meteo
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <ImportWeather id={id} />
      </UncontrolledCollapse>
      <Footer />
    </>
  );
}

export default DestBordeaux;
