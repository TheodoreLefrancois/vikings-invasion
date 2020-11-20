import Axios from "axios";
import { useState, useEffect } from "react";
import { Col, Table } from "reactstrap";
import DisplayWeather from "./DisplayWeather";

function ImportWeather(props) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${props.id}/`
    ).then((res) => {
      setWeather(res.data.consolidated_weather);
    });
  }, []);
  return (
    <Col className="w-100">
      <Table style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Sky-state</td>
            <td>Wind-direction</td>
            <td>Min</td>
            <td>Max</td>
            <td>Humidity</td>
            <td>Fiability</td>
          </tr>
        </thead>
        <tbody>
          {weather.map((x) => {
            console.log(x);
            return (
              <DisplayWeather
                weath={x.weather_state_name}
                img={x.weather_state_abbr}
                winddir={x.wind_direction_compass}
                date={x.applicable_date}
                min={x.min_temp}
                max={x.max_temp}
                humidity={x.humidity}
                fiability={x.predictability}
              />
            );
          })}
          ;
        </tbody>
      </Table>
    </Col>
  );
}

export default ImportWeather;
