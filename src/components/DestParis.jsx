import { useState, useContext, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import ParisMarker from "./ParisMarkers";
import { Button, Col, Container, Navbar, Row } from "reactstrap";

import RaidAdvisor from "../image/RaidAdvisor.jpg";
import { getParisNetworks } from "../api/vikingApi";
import { getParisLines } from "../api/vikingApi";
import Footer from "./Footer";
import AppContext from "../Context";
import Filtertools from "./FilterTools";
import ImportWeather from "./ImportWeather";
import ProgressHack from "./ProgressHack";

function DestParis() {
    const [loading, setLoading] = useState(true);
    const [isDisplay, setIsDisplay] = useState(true);
    const [busAPI, setBusAPI] = useState([]);
    const [tramAPI, setTramAPI] = useState([]);
    const [metroAPI, setMetroAPI] = useState([]);
    const [rerAPI, setRerAPI] = useState([]);
    const [networkStaticAPI, setNetworkStaticAPI] = useState([]);
    const id = 615702;
    const {
        lineDepartGPS,
        lineArriveeGPS,
        setLineDepartGPS,
        setLineArriveeGPS,
        displayPage,
        setDisplayPage,
    } = useContext(AppContext);
    const tag = "Paris";

    useEffect(() => {
        setLineArriveeGPS([]);
        setLineDepartGPS([]);
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
                            <Button
                                color="warning"
                                onClick={() => setDisplayPage(false)}
                            >
                                Go back Home
                            </Button>
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
                {isDisplay ? (
                    <Row className="d-flex flex-column align-items-center">
                        {/* MAP PARIS */}
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
                                <ParisMarker
                                    lineDepartGPS={lineDepartGPS}
                                    lineArriveeGPS={lineArriveeGPS}
                                />
                                {/* Markers */}
                            </MapContainer>
                        </Row>
                    </Row>
                ) : (
                    /* METEO */
                    <Row>
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
                )}
            </Container>
            <Footer />
        </>
    ) : (
        <ProgressHack />
    );
}

export default DestParis;
