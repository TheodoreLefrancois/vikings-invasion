import { MapContainer, TileLayer } from "react-leaflet";

function InteractiveMap() {
    return (
        <div className="App">
            <MapContainer
                style={{ height: "600px", width: "800px" }}
                center={[48.88, 2.28]}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default InteractiveMap;
