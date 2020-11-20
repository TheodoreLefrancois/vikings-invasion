import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import DestParis from "./components/DestParis";
import AppContext from "./Context";

function Rout() {
    const [lineDepartGPS, setLineDepartGPS] = useState([]);
    const [lineArriveeGPS, setLineArriveeGPS] = useState([]);
    return (
        <AppContext.Provider
            value={{
                lineDepartGPS,
                setLineDepartGPS,
                lineArriveeGPS,
                setLineArriveeGPS,
            }}
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route
                        exact
                        path="/destParis"
                        component={DestParis}
                    ></Route>
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}

export default Rout;
