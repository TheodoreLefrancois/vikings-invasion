import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AppContext from "./Context";

function Router() {
    return (
        <AppContext.Provider value={{}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default Router;
