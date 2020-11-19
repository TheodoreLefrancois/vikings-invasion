import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];
export default function interactiveMap() {
  return (
    <MapContainer
      style={{ height: "400px" }}
      center={position}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
