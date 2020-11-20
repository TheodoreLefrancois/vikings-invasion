import { useState, useEffect } from "react";
import {
  Button,
  Spinner,
  Jumbotron,
  Col,
  UncontrolledCollapse,
  Input,
} from "reactstrap";

export default function Filtertools({
  getCurrentNetworks,
  busAPI,
  tramAPI,
  metroAPI,
  rerAPI,
  tag,
}) {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [networks, setNetworks] = useState([]);
  const [metro, setMetro] = useState([]);
  const [bus, setBus] = useState([]);
  const [rer, setRer] = useState([]);
  const [tram, setTram] = useState([]);
  const [checkMetro, setCheckMetro] = useState(true);
  const [checkBus, setCheckBus] = useState(true);
  const [checkRer, setCheckRer] = useState(true);
  const [checkTram, setCheckTram] = useState(true);

  useEffect(() => {
    try {
      setNetworks(getCurrentNetworks);
      setLoading(!loading);
    } catch (err) {
      setIsError(true);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

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

  if (checkMetro && tag === "Paris") {
    function getDatas() {
      setMetro(metroAPI.data);
      setCheckMetro(!checkMetro);
    }
    getDatas();
  }

  if (checkBus) {
    function getDatas() {
      setBus(busAPI.data);
      setCheckBus(!checkBus);
    }
    getDatas();
  }

  if (checkRer && tag === "Paris") {
    function getDatas() {
      setRer(rerAPI.data);
      setCheckRer(!checkRer);
    }
    getDatas();
  }

  if (checkTram) {
    function getDatas() {
      setTram(tramAPI.data);
      setCheckTram(!checkTram);
    }
    getDatas();
  }

  function isReturn(elmt) {
    switch (elmt) {
      case "metro":
        if (tag === "Paris") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {metro.map((e) => (
                  <option title={e.name}>{e.name}</option>
                ))}
              </Input>
            </Col>
          );
        }
        break;
      case "bus":
        if (tag === "Paris") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {bus.map((e) => (
                  <option title={e.name}>{e.name}</option>
                ))}
              </Input>
            </Col>
          );
        } else if (tag === "Bordeaux") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {bus.records.map((e) => (
                  <option title={e.fields.nomarret}>{e.fields.nomarret}</option>
                ))}
              </Input>
            </Col>
          );
        }
        break;
      case "rer":
        if (tag === "Paris") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {rer.map((e) => (
                  <option title={e.name}>{e.name}</option>
                ))}
              </Input>
            </Col>
          );
        }
        break;
      case "tram":
        if (tag === "Paris") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {tram.map((e) => (
                  <option title={e.name}>{e.name}</option>
                ))}
              </Input>
            </Col>
          );
        } else if (tag === "Bordeaux") {
          return (
            <Col>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {tram.records.map((e) => (
                  <option title={e.fields.nomarret}>{e.fields.nomarret}</option>
                ))}
              </Input>
            </Col>
          );
        } else {
          <Col>
            <h2>OUPS !!! an error as occured ...</h2>
          </Col>;
        }
        break;
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
              <div key={network.id} className="inline-block py-1">
                <Button
                  className="col-12 btn btn-info"
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
