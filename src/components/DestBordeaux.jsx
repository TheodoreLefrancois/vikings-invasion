import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Navbar,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import ImportWeather from "./ImportWeather";

import {
  getBordeauxBus,
  getBordeauxNetworks,
  getBordeauxTrams,
} from "../api/vikingApi";
import Filtertools from "./FilterTools";

import RaidAdvisor from "../image/RaidAdvisor.jpg";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import AppContext from "../Context";
import ProgressHack from "./ProgressHack";

const GPSPos = [44.8333, -0.5667];

function DestBordeaux(props) {
  const [loading, setLoading] = useState(true);
  const [isDisplay, setIsDisplay] = useState(true);
  const [busAPI, setBusAPI] = useState([]);
  const [tramAPI, setTramAPI] = useState([]);
  const [networkStaticAPI, setNetworkStaticAPI] = useState([]);
  const tag = "Bordeaux";
  const id = 580778;

  useEffect(() => {
    const getDatas = async () => {
      const bus = await getBordeauxBus();
      setBusAPI(bus);
      const tram = await getBordeauxTrams();
      setTramAPI(tram);
      const cityCurrentNetworks = getBordeauxNetworks();
      setNetworkStaticAPI(cityCurrentNetworks);
      setLoading(!loading);
    };
    getDatas();
  }, []);

  return (
    <>
      <Container>
        <Row className="py-2 align-items-center justify-content-center">
          <Col className="col-3" sm={{ size: "auto" }}>
            <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>
          </Col>
          <Col className="col-6 justify-content-center">
            <h2>Here are the plans of Bordeaux</h2>
          </Col>
          <Col className="col-3">
            <Link to="/">
              <Button color="warning">Go back Home</Button>
            </Link>
          </Col>
        </Row>
        <Row className="py-1">
          <Button
            block
            className="btn-success"
            onClick={() => setIsDisplay(!isDisplay)}
          >
            <h5>{isDisplay ? "Display weather" : "Display map"}</h5>
          </Button>
        </Row>
        <Row
          className="d-flex flex-column align-items-center"
          style={{ display: isDisplay ? "" : "none" }}
        >
          {loading ? (
            <p>Loading</p>
          ) : (
            <Row>
              <Filtertools
                getCurrentNetworks={networkStaticAPI}
                busAPI={busAPI}
                tramAPI={tramAPI}
                tag={tag}
              />
            </Row>
          )}
          <Row>
            <MapContainer
              style={{ height: "600px", width: "800px" }}
              center={GPSPos}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </Row>
        </Row>
        <Row style={{ display: isDisplay ? "none" : "" }}>
          <Col className="w-100">
            <Navbar
              className="text-white d-flex justify-content-center"
              color="danger"
            >
              <h5 className="">
                <strong>Meteo</strong>
              </h5>
            </Navbar>
            <ImportWeather id={id} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DestBordeaux;
