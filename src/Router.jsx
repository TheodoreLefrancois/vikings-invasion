import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import DestBordeaux from "./components/DestBordeaux";
import DestParis from "./components/DestParis";
import AppContext from "./Context";

function Rout() {
    const [lineDepartGPS, setLineDepartGPS] = useState([]);
    const [lineArriveeGPS, setLineArriveeGPS] = useState([]);
    const [displayPage, setDisplayPage] = useState(false);
    return (
        <AppContext.Provider
            value={{
                lineDepartGPS,
                setLineDepartGPS,
                lineArriveeGPS,
                setLineArriveeGPS,
                displayPage,
                setDisplayPage,
            }}
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/destParis" component={DestParis} />
                    <Route
                        exact
                        path="/destBordeaux"
                        component={DestBordeaux}
                    />
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}

export default Rout;
