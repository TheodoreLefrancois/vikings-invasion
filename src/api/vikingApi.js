import Axios from "axios";
import { networks } from "./staticApi";

const PARIS_BASE_URL = "http://restratpws.azurewebsites.net/api/";

/**
 * returns networks of Paris city (tram, bus, metro, rer)
 */

// *******************************************************
//      Paris Lines
// *******************************************************

/**
 * returns networks of Paris city (tram, bus, metro, rer)
 */
export function getParisNetworks() {
    return networks;
}

export function getParisLines(networtk) {
    const url = PARIS_BASE_URL.concat(`Lines/${networks}`);

    return axiosRequest(url);
}

export function getParisLineColor(network, lineId) {
    const url = PARIS_BASE_URL.concat(`Lines/${networks}/line/${lineId}/color`);

    return axiosRequest(url);
}

// *******************************************************
//      Paris Stations
// *******************************************************

export function getParisStationByLine(lineId) {
    const url = PARIS_BASE_URL.concat(`Stations/${lineId}`);

    return axiosRequest(url);
}

// *******************************************************
//      Paris Directions
// *******************************************************

export function getParisDirectionsByLine(lineId) {
    const url = PARIS_BASE_URL.concat(`Directions/${lineId}`);

    return axiosRequest(url);
}

// *******************************************************
//      Paris Missions
// *******************************************************

export function getParisMissionsByStation(lineId, stationId, directionId) {
    const url = PARIS_BASE_URL.concat(
        `Missions/${lineId}/from/${stationId}/way/${directionId}`
    );

    return axiosRequest(url);
}

function axiosRequest(url) {
    return Axios.get(url);
}
