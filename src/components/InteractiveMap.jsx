import { Icon } from "leaflet/src/layer/marker/Icon";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import "../../node_modules/leaflet/dist/leaflet";
// import Leaflet from "leaflet";
import viking from "../image/viking_PNG10.png";
import cible from "../image/cible2.png";

function InteractiveMap() {
  // const icon = new Icon({
  //     iconUrl: favicon,
  // });

  const head = new Icon({
    iconUrl: viking,
    iconSize: [60, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [52.520007, 13.404954], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  const victim = new Icon({
    iconUrl: cible,
    iconSize: [60, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [44.837789, -0.57918], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <div className="App">
      <MapContainer
        style={{ height: "600px" }}
        center={[47.3, -1]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[52.520007, 13.404954]} icon={head}></Marker>
        <Marker position={[44.43225, 26.10626]} icon={head}></Marker>
        <Marker position={[52.370216, 4.895168]} icon={head}></Marker>
        <Marker position={[41.3833, 2.1833]} icon={head}></Marker>
        <Marker position={[50.8466, 4.3528]} icon={head}></Marker>
        <Marker position={[39.1167, -8.6333]} icon={head}></Marker>
        <Marker position={[51.509093, -0.094151]} icon={head}></Marker>
        <Marker position={[40.4167754, -3.3037902]} icon={head}></Marker>
        <Marker position={[45.237789, -0.17918]} icon={victim}></Marker>
      </MapContainer>
    </div>
  );
}
export default InteractiveMap;
