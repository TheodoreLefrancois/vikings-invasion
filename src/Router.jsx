import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import DestParis from "./components/DestParis";
import AppContext from "./Context";

function Rout() {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/destParis" component={DestParis}></Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default Rout;
