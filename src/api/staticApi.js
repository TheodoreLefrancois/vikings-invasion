import TBM from "../image/TBM.png";
import Keolis from "../image/Logo_Keolis_Bordeaux.jpg";

export const parisNetworks = [
  {
    id: 0,
    name: "Metro",
    slug: "metro",
    image: "http://restratpws.azurewebsites.net/api/images/p_met.gif",
  },
  {
    id: 1,
    name: "Bus",
    slug: "bus",
    image: "http://restratpws.azurewebsites.net/api/images/p_bus.gif",
  },
  {
    id: 2,
    name: "ReR",
    slug: "rer",
    image: "http://restratpws.azurewebsites.net/api/images/p_rer.gif",
  },
  {
    id: 3,
    name: "Tram",
    slug: "tram",
    image: "http://restratpws.azurewebsites.net/api/images/p_tram.gif",
  },
];

export const bordeauxNetworks = [
  {
    id: 0,
    name: "Tram",
    slug: "tram",
    image: TBM,
  },
  {
    id: 1,
    name: "Bus",
    slug: "bus",
    image: Keolis,
  },
];
