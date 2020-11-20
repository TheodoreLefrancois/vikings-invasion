import Footer from "./components/Footer";
import InteractiveMap from "./components/InteractiveMap";
import MapLegend from "./components/MapLegend";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <InteractiveMap />
      <MapLegend />
      <Footer />
    </div>
  );
}

export default App;
