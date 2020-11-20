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
      <th>{`${min}°C`}</th>
      <th>{`${max}°C`}</th>
      <th>{`${humidity}%`}</th>
      <th>{fiability}</th>
    </tr>
  );
}

export default DisplayWeather;
