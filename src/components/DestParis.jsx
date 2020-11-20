import { useState, useContext, useEffect } from "react";
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

import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { getParisNetworks } from "../api/vikingApi";
import { getParisLines } from "../api/vikingApi";
import Footer from "./Footer";
import AppContext from "../Context";
import Filtertools from "./FilterTools";

// icons
import louvre from "../image/louvre.png";
import ring from "../image/ring.png";
import elyzeePalace from "../image/Elysee-Palace.png";
import arche from "../image/arche.png";
import piece from "../image/piece.png";
import liasse from "../image/liasse.png";
import hache from "../image/hache.png";
import ImportWeather from "./ImportWeather";
import ProgressHack from "./ProgressHack";

const louvreIcon = new Icon({
  iconUrl: louvre,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [48.867163198, 2.324332036], // point of the icon which will correspond to marker's location
  // shadowSize: [50, 64], // size of the shadow
  // shadowAnchor: [4, 62], // the same for the shadow
  // popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const ringIcon = new Icon({
  iconUrl: ring,
  iconSize: [64, 64], // size of the icon
  iconAnchor: [48.864824, 2.334595], // point of the icon which will correspond to marker's location
});

const elyzeePalaceIcon = new Icon({
  iconUrl: elyzeePalace,
  iconSize: [64, 32], // size of the icon
  iconAnchor: [48.875, 2.31], // point of the icon which will correspond to marker's location
});

const archeIcon = new Icon({
  iconUrl: arche,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [48.892, 2.24], // point of the icon which will correspond to marker's location
});

const pieceIcon = new Icon({
  iconUrl: piece,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [48.85, 2.326], // point of the icon which will correspond to marker's location
});

const liasseIcon = new Icon({
  iconUrl: liasse,
  iconSize: [64, 64], // size of the icon
  iconAnchor: [48.863, 2.276], // point of the icon which will correspond to marker's location
});

const hacheIcon = new Icon({
  iconUrl: hache,
  iconSize: [64, 64], // size of the icon
  iconAnchor: [48.863, 2.276], // point of the icon which will correspond to marker's location
});

function DestParis() {
  const [loading, setLoading] = useState(true);
  const [isDisplay, setIsDisplay] = useState(true);
  const [busAPI, setBusAPI] = useState([]);
  const [tramAPI, setTramAPI] = useState([]);
  const [metroAPI, setMetroAPI] = useState([]);
  const [rerAPI, setRerAPI] = useState([]);
  const [networkStaticAPI, setNetworkStaticAPI] = useState([]);
  const id = 615702;
  const { lineDepartGPS, lineArriveeGPS } = useContext(AppContext);
  const [displayPage, setdisplayPage] = useState(true);
  const tag = "Paris";

  useEffect(() => {
    setTimeout(() => setdisplayPage(true), 2300);
    const getDatas = async () => {
      const bus = await getParisLines("bus");
      setBusAPI(bus);
      const tram = await getParisLines("tram");
      setTramAPI(tram);
      const metro = await getParisLines("metro");
      setMetroAPI(metro);
      const rer = await getParisLines("metro");
      setRerAPI(rer);
      const cityCurrentNetworks = getParisNetworks();
      setNetworkStaticAPI(cityCurrentNetworks);
      setLoading(!loading);
    };
    getDatas();
  }, []);

  return displayPage ? (
    <>
      (
      <Container>
        <Row className="py-2 align-items-center">
          <Col sm={{ size: "auto", offset: 1 }}>
            <img src={RaidAdvisor} alt="RaidAdvisor logo"></img>
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
                metroAPI={metroAPI}
                rerAPI={rerAPI}
                tag={tag}
              />
            </Row>
          )}
          <Row>
            <MapContainer
              style={{ height: "600px", width: "800px" }}
              center={[48.87, 2.28]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[48.864824, 2.334595]} icon={louvreIcon}>
                <Popup>
                  Le louvre! <br /> Moulte argent et or
                </Popup>
              </Marker>
              <Marker position={[48.875, 2.33]} icon={ringIcon}>
                <Popup>
                  Place vendôme <br /> Joillerie
                </Popup>
              </Marker>

              <Marker position={[48.875, 2.31]} icon={elyzeePalaceIcon}>
                <Popup>
                  Palais de l'Elysée <br /> Oeuvres d'art
                </Popup>
              </Marker>

              <Marker position={[48.892, 2.24]} icon={archeIcon}>
                <Popup>
                  La grande Arche <br /> Argent
                </Popup>
              </Marker>

              <Marker position={[48.85, 2.326]} icon={pieceIcon}>
                <Popup>
                  Banque de france <br /> Argent
                </Popup>
              </Marker>

              <Marker position={[48.863, 2.276]} icon={liasseIcon}>
                <Popup>
                  16e Arrondissement <br /> Nobles
                </Popup>
              </Marker>

              {/* Ligne Bus */}
              {lineDepartGPS.length > 0 ? (
                <Marker
                  position={[lineDepartGPS[1], lineDepartGPS[0]]}
                  icon={hacheIcon}
                >
                  <Popup>Station Départ</Popup>
                </Marker>
              ) : null}

              {lineArriveeGPS.length > 0 ? (
                <Marker
                  position={[lineArriveeGPS[1], lineArriveeGPS[0]]}
                  icon={hacheIcon}
                >
                  <Popup>Station Arrivée</Popup>
                </Marker>
              ) : null}
            </MapContainer>
          </Row>
        </Row>
        <Row style={{ display: isDisplay ? "none" : "" }}>
          <Col className="w-100">
            <Navbar
              className="text-white d-flex justify-content-center"
              color="danger"
            >
              <h5>
                <strong>Meteo</strong>
              </h5>
            </Navbar>
            <ImportWeather id={id} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  ) : (
    <ProgressHack />
  );
}

export default DestParis;
