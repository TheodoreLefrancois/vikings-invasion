import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Filtertools from "./FilterTools";

import RaidAdvisor from "../image/RaidAdvisor.jpg";

// icons
import louvre from "../image/louvre.png";
import ring from "../image/ring.png";
import elyzeePalace from "../image/Elysee-Palace.png";
import arche from "../image/arche.png";
import piece from "../image/piece.png";
import liasse from "../image/liasse.png";
import Footer from "./Footer";

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
function DestParis() {
  // eslint-disable-next-line no-unused-vars
  const id = 615702;
  return (
    <>
      <Container>
        <Row className="py-3 align-items-center">
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
        <Row>
          <Col>
            <Filtertools />
          </Col>
          <Col>
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
            </MapContainer>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DestParis;
