import { useState } from "react";
import "./App.css";
import EuropeFlags from "./EuropeFlags";
import AfricaFlags from "./AfricaFlags";
import AsiaFlags from "./AsiaFlags";

function App() {
  const [showEurope, setShowEurope] = useState(false);
  const [showAfrica, setShowAfrica] = useState(false);
  const [showAsia, setShowAsia] = useState(false);
  const [showInfo, setShowInfo] = useState(null);

  const showMoreInfo = (country) => {
    setShowInfo(showInfo === country ? null : country);
  };

  return (
    <div className="App">
      <h1>Världens Flaggor</h1>
      <p>Välj en världsdel för att se flaggor</p>

      <button
        onClick={() => {
          setShowEurope(!showEurope);
        }}
      >
        Europe
      </button>

      <button
        onClick={() => {
          setShowAfrica(!showAfrica);
        }}
      >
        Africa
      </button>

      <button
        onClick={() => {
          setShowAsia(!showAsia);
        }}
      >
        Asia
      </button>

      {showEurope && (
        <EuropeFlags
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          showMoreInfo={showMoreInfo}
        />
      )}
      {showAfrica && (
        <AfricaFlags
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          showMoreInfo={showMoreInfo}
        />
      )}

      {showAsia && (
        <AsiaFlags
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          showMoreInfo={showMoreInfo}
        />
      )}
    </div>
  );
}

export default App;
