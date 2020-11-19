import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Filtertools from "./FilterTools";

function DestParis() {
    return (
        <Container>
            <Row>
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
                        style={{ height: "400px" }}
                        center={[51.505, -0.09]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default DestParis;
