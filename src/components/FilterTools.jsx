import { point } from "leaflet";
import { useState, useEffect, useContext } from "react";
import {
    Spinner,
    Jumbotron,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown,
    Container,
} from "reactstrap";
import { getGeolocalisation } from "../api/vikingApi";
import AppContext from "../Context";

export default function Filtertools({
    getCurrentNetworks,
    busAPI,
    tramAPI,
    metroAPI,
    rerAPI,
    tag,
}) {
    const { setLineDepartGPS, setLineArriveeGPS } = useContext(AppContext);

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [networks, setNetworks] = useState([]);
    const [checkMetro, setCheckMetro] = useState(true);
    const [checkBus, setCheckBus] = useState(true);
    const [checkRer, setCheckRer] = useState(true);
    const [checkTram, setCheckTram] = useState(true);
    const [selectedNetwork, setSelectedNetwork] = useState([]);

    const [selectedLine, setSelectedLine] = useState("");

    useEffect(() => {
        try {
            setNetworks(getCurrentNetworks);
            if (tag === "Paris") {
                setCheckMetro(!checkMetro);
                setCheckBus(!checkBus);
                setCheckRer(!checkRer);
                setCheckTram(!checkTram);
            }
            setLoading(!loading);
        } catch (err) {
            setIsError(true);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (selectedLine.length > 0) {
            setLineDepartGPS([]);
            setLineArriveeGPS([]);

            const points = selectedLine.split("/");

            console.log(points);
            const getDataOne = async () => {
                const pointOne = await getGeolocalisation(points[0]);

                setLineDepartGPS(
                    pointOne.data.features[0].geometry.coordinates
                );
            };

            const getDataTwo = async () => {
                const pointTwo = await getGeolocalisation(points[1]);

                setLineArriveeGPS(
                    pointTwo.data.features[1].geometry.coordinates
                );
            };
            getDataOne();
            getDataTwo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLine]);

    const onSelectedLine = (e) => {
        console.log(tag, e);
        tag !== "Bordeaux"
            ? setSelectedLine(e.target.innerHTML)
            : setSelectedLine("");
    };

    if (isError) {
        return (
            <Jumbotron fluid>
                <Col fluid>
                    <h1 className="display-3">Oups !!!</h1>
                    <p className="lead">{error.message}</p>
                </Col>
            </Jumbotron>
        );
    }

    function isCheck(elmt) {
        switch (elmt) {
            case "metro":
                setCheckMetro(!checkMetro);
                setSelectedNetwork(metroAPI.data, "bus");
                break;
            case "bus":
                setCheckBus(!checkBus);
                setSelectedNetwork(busAPI.data);

                break;
            case "rer":
                setCheckRer(!checkRer);
                setSelectedNetwork(rerAPI.data);

                break;
            case "tram":
                setCheckTram(!checkTram);
                setSelectedNetwork(tramAPI.data);

                break;
            default:
                return "error";
        }
    }

    if (checkMetro && tag === "Paris") {
        function getDatas() {
            setCheckMetro(!checkMetro);
        }
        getDatas();
    }

    if (checkBus) {
        function getDatas() {
            setCheckBus(!checkBus);
        }
        getDatas();
    }

    if (checkRer && tag === "Paris") {
        function getDatas() {
            setCheckRer(!checkRer);
        }
        getDatas();
    }

    if (checkTram) {
        function getDatas() {
            setCheckTram(!checkTram);
        }
        getDatas();
    }

    function isReturn(elmt) {
        return selectedNetwork.length === 0 ? null : tag === "Paris" ? (
            <DropdownMenu
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
                onClick={onSelectedLine}
            >
                {selectedNetwork.map((e) => (
                    <DropdownItem key={e.name} title={e.name}>
                        {e.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        ) : (
            <DropdownMenu
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
            >
                {selectedNetwork.records.map((e) => (
                    <DropdownItem
                        key={e.fields.nomarret}
                        title={e.fields.nomarret}
                    >
                        {e.fields.nomarret}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        );
    }

    return (
        <>
            {loading ? (
                <div>
                    <Spinner type="grow" color="primary" className="m-5" />
                </div>
            ) : (
                <Container className="d-flex justify-content-around">
                    {networks.map((network) => {
                        return (
                            <div key={network.id} className="py-1 col-3">
                                <UncontrolledButtonDropdown
                                    block="true"
                                    key={network.id}
                                    className="px-2"
                                    style={{ width: "150px" }}
                                >
                                    <DropdownToggle
                                        carret="true"
                                        className="col-12 border-0 btn-info"
                                        color="primary"
                                        id={network.name}
                                        style={{ marginBottom: "1rem" }}
                                        onClick={() => isCheck(network.slug)}
                                    >
                                        <img
                                            src={network.image}
                                            alt={network.name}
                                            className="rounded-circle"
                                            style={{ height: "50px" }}
                                        />
                                    </DropdownToggle>
                                    <>{isReturn("")}</>
                                </UncontrolledButtonDropdown>
                            </div>
                        );
                    })}
                </Container>
            )}
        </>
    );
}
