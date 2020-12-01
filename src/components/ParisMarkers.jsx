import { Icon } from "leaflet";
import { Popup, Marker } from "react-leaflet";
import louvre from "../image/louvre.png";
import ring from "../image/ring.png";
import elyzeePalace from "../image/Elysee-Palace.png";
import arche from "../image/arche.png";
import piece from "../image/piece.png";
import liasse from "../image/liasse.png";
import hache from "../image/hache.png";

const louvreIcon = new Icon({
    iconUrl: louvre,
    iconSize: [32, 32], // size of the icon
    iconAnchor: [48.867163198, 2.324332036], // point of the icon which will correspond to marker's location
});

const ringIcon = new Icon({
    iconUrl: ring,
    iconSize: [64, 64], // size of the icon
    iconAnchor: [48.864824, 2.334595], // point of the icon which will correspond to marker's location
});

const elyzeePalaceIcon = new Icon({
    iconUrl: elyzeePalace,
    iconSize: [64, 32], // size of the icon
    iconAnchor: [48.875, 2.31], // point of the icon which will correspond to marker's location
});

const archeIcon = new Icon({
    iconUrl: arche,
    iconSize: [32, 32], // size of the icon
    iconAnchor: [48.892, 2.24], // point of the icon which will correspond to marker's location
});

const pieceIcon = new Icon({
    iconUrl: piece,
    iconSize: [32, 32], // size of the icon
    iconAnchor: [48.85, 2.326], // point of the icon which will correspond to marker's location
});

const liasseIcon = new Icon({
    iconUrl: liasse,
    iconSize: [64, 64], // size of the icon
    iconAnchor: [48.863, 2.276], // point of the icon which will correspond to marker's location
});

const hacheIcon = new Icon({
    iconUrl: hache,
    iconSize: [64, 64], // size of the icon
    iconAnchor: [48.863, 2.276], // point of the icon which will correspond to marker's location
});

function ParisMarkers({ lineDepartGPS, lineArriveeGPS }) {
    return (
        <>
            <Marker position={[48.864824, 2.334595]} icon={louvreIcon}>
                <Popup>
                    Le louvre! <br /> Moulte argent et or
                </Popup>
            </Marker>
            <Marker position={[48.875, 2.33]} icon={ringIcon}>
                <Popup>
                    Place vendôme <br /> Joillerie
                </Popup>
            </Marker>

            <Marker position={[48.875, 2.31]} icon={elyzeePalaceIcon}>
                <Popup>
                    Palais de l'Elysée <br /> Oeuvres d'art
                </Popup>
            </Marker>

            <Marker position={[48.892, 2.24]} icon={archeIcon}>
                <Popup>
                    La grande Arche <br /> Argent
                </Popup>
            </Marker>

            <Marker position={[48.85, 2.326]} icon={pieceIcon}>
                <Popup>
                    Banque de france <br /> Argent
                </Popup>
            </Marker>

            <Marker position={[48.863, 2.276]} icon={liasseIcon}>
                <Popup>
                    16e Arrondissement <br /> Nobles
                </Popup>
            </Marker>

            {/* Ligne Bus */}
            {lineDepartGPS.length > 0 ? (
                <Marker
                    position={[lineDepartGPS[1], lineDepartGPS[0]]}
                    icon={hacheIcon}
                >
                    <Popup>Station Départ</Popup>
                </Marker>
            ) : null}

            {lineArriveeGPS.length > 0 ? (
                <Marker
                    position={[lineArriveeGPS[1], lineArriveeGPS[0]]}
                    icon={hacheIcon}
                >
                    <Popup>Station Arrivée</Popup>
                </Marker>
            ) : null}
        </>
    );
}

export default ParisMarkers;
