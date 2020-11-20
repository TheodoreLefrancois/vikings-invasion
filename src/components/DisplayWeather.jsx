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
      <td>{date}</td>
      <td>
        <img
          src={`https://www.metaweather.com/static/img/weather/png/64/${img}.png`}
          alt={weath}
        />
      </td>
      <td>{winddir}</td>
      <td>{`${Math.round(min)}°C`}</td>
      <td>{`${Math.round(max)}°C`}</td>
      <td>{`${humidity}%`}</td>
      <td>{fiability}</td>
    </tr>
  );
}

export default DisplayWeather;
