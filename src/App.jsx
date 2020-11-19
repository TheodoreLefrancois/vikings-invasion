import Filtertools from "./components/FilterTools";
import InteractiveMap from "./components/InteractiveMap";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <InteractiveMap />
      <Filtertools />
    </div>
  );
}

export default App;
