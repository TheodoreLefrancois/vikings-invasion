import axios from "axios";
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

export function getParisLines(network) {
    const url = PARIS_BASE_URL.concat(`Lines/${network}`);

    return axiosRequest(url);
}

export function getParisLineColor(network, lineId) {
    const url = PARIS_BASE_URL.concat(`Lines/${network}/line/${lineId}/color`);

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

// *******************************************************
//      BORDEAUX
// *******************************************************

export function getBordeauxTrams() {
    const url =
        "/api/records/1.0/search/?dataset=tb_arret_p&q=&facet=ville&facet=codepost&facet=nature&facet=lignedes&facet=mobilie1&facet=reseau&refine.ville=BORDEAUX&refine.reseau=TRAM&refine.codepost=33000";

    return axiosRequest(url);
}

export function getGeolocalisation(adress) {
    const url = "https://api-adresse.data.gouv.fr/search/?q="
        .concat(adress)
        .concat(" paris");

    return axiosRequest(url);
}

function axiosRequest(url) {
    console.log(url);
    return axios.get(url);
}
