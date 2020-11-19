import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import AppContext from "./Context";

function Rout() {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default Rout;
