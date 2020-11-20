import Axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import DisplayWeather from "./DisplayWeather";

function ImportWeather(props) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${props.id}/`
    ).then((res) => {
      setWeather(res.data.consolidated_weather);
    });
  });
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Sky-state</th>
          <th>Wind-direction</th>
          <th>Min</th>
          <th>Max</th>
          <th>Humidity</th>
          <th>Fiability</th>
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
  );
}

export default ImportWeather;
