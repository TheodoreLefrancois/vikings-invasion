import { useState, useEffect, useContext } from "react";
import {
  Button,
  Spinner,
  Jumbotron,
  Col,
  UncontrolledCollapse,
  Input,
} from "reactstrap";

import {
  getParisNetworks,
  getParisLines,
  getGeolocalisation,
} from "../api/vikingApi";
import AppContext from "../Context";

export default function Filtertools() {
  const { setLineDepartGPS, setLineArriveeGPS } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [networks, setNetworks] = useState([]);
  const [metro, setMetro] = useState([]);
  const [bus, setBus] = useState([]);
  const [rer, setRer] = useState([]);
  const [tram, setTram] = useState([]);
  const [checkMetro, setCheckMetro] = useState(false);
  const [checkBus, setCheckBus] = useState(false);
  const [checkRer, setCheckRer] = useState(false);
  const [checkTram, setCheckTram] = useState(false);

  const [selectedLine, setSelectedLine] = useState("");

  useEffect(() => {
    try {
      const cityNetworks = getParisNetworks();
      setNetworks(cityNetworks);
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

      // console.log(points);
      const getDataOne = async () => {
        const pointOne = await getGeolocalisation(points[0]);

        setLineDepartGPS(pointOne.data.features[0].geometry.coordinates);
      };

      const getDataTwo = async () => {
        const pointTwo = await getGeolocalisation(points[1]);

        setLineArriveeGPS(pointTwo.data.features[1].geometry.coordinates);
      };
      getDataOne();
      getDataTwo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLine]);

  const onSelectedLine = (e) => {
    setSelectedLine(e.target.value);
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
        break;
      case "bus":
        setCheckBus(!checkBus);
        break;
      case "rer":
        setCheckRer(!checkRer);
        break;
      case "tram":
        setCheckTram(!checkTram);
        break;
      default:
        return "error";
    }
  }

  if (checkMetro) {
    const getDatas = async () => {
      const currentMetro = await getParisLines("metro");
      setMetro(currentMetro.data);
      setCheckMetro(!checkMetro);
    };
    getDatas();
  }

  if (checkBus) {
    const getDatas = async () => {
      const currentBus = await getParisLines("bus");
      setBus(currentBus.data);
      setCheckBus(!checkBus);
    };
    getDatas();
  }

  if (checkRer) {
    const getDatas = async () => {
      const currentReR = await getParisLines("rer");
      setRer(currentReR.data);
      setCheckRer(!checkRer);
    };
    getDatas();
  }

  if (checkTram) {
    const getDatas = async () => {
      const currentTram = await getParisLines("tram");
      setTram(currentTram.data);
      setCheckTram(!checkTram);
    };
    getDatas();
  }

  function isReturn(elmt) {
    switch (elmt) {
      case "metro":
        return (
          <Col>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
              onClick={onSelectedLine}
            >
              {metro.map((e) => (
                <option title={e.name}>{e.name}</option>
              ))}
            </Input>
          </Col>
        );
      case "bus":
        return (
          <Col>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
              onClick={onSelectedLine}
            >
              {bus.map((e) => (
                <option title={e.name}>{e.name}</option>
              ))}
            </Input>
          </Col>
        );
      case "rer":
        return (
          <Col>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
              onClick={onSelectedLine}
            >
              {rer.map((e) => (
                <option title={e.name}>{e.name}</option>
              ))}
            </Input>
          </Col>
        );
      case "tram":
        return (
          <Col>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
              onClick={onSelectedLine}
            >
              {tram.map((e) => (
                <option title={e.name}>{e.name}</option>
              ))}
            </Input>
          </Col>
        );
      default:
        return "error";
    }
  }

  return (
    <>
      {loading ? (
        <div>
          <Spinner type="grow" color="primary" className="m-5" />
        </div>
      ) : (
        <div>
          {networks.map((network) => {
            return (
              <div key={network.id} className="inline-block">
                <Button
                  className="col-12 border-0 rounded-circle bg-transparent"
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
                </Button>
                <UncontrolledCollapse toggler={`#${network.name}`}>
                  {isReturn(network.slug)}
                </UncontrolledCollapse>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
