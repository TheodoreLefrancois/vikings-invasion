import { Icon } from "leaflet/src/layer/marker/Icon";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "../../node_modules/leaflet/dist/leaflet";
// import Leaflet from "leaflet";
import favicon from "../favicon.ico";

function InteractiveMap() {
    // const icon = new Icon({
    //     iconUrl: favicon,
    // });
    const image = new Icon({
        iconUrl: favicon,
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    return (
        <div className="App">
            <MapContainer
                style={{ height: "400px" }}
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={image}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default InteractiveMap;
