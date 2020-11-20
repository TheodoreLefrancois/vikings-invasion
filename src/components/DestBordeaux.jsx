import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "./Footer";
import ImportWeather from "./ImportWeather";

function DestBordeaux(props) {
  const id = 580778;

  return (
    <>
      <Link to="/">
        <Button color="warning">Go back Home</Button>
      </Link>
      <ImportWeather id={id} />
      <Footer />
    </>
  );
}

export default DestBordeaux;
