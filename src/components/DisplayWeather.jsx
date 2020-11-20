function DisplayWeather({
  date,
  img,
  winddir,
  weath,
  min,
  max,
  humidity,
  fiability,
}) {
  return (
    <tr>
      <th>{date}</th>
      <th>
        <img
          src={`https://www.metaweather.com/static/img/weather/png/64/${img}.png`}
          alt={weath}
        />
      </th>
      <th>{winddir}</th>
      <th>{`${Math.round(min)}°C`}</th>
      <th>{`${Math.round(max)}°C`}</th>
      <th>{`${humidity}%`}</th>
      <th>{fiability}</th>
    </tr>
  );
}

export default DisplayWeather;
