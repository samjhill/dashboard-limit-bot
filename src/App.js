import './App.css';
import { Configuration } from "./components/Configuration";
import { Stats } from "./components/Stats";
import { Trades } from "./components/Trades";
import { OpenOrders } from "./components/OpenOrders";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>
              <Link to="/orders">Open Orders</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
            <li>
              <Link to="/trades">Buy History</Link>
            </li>
            <li>
              <Link to="/configuration">Configuration</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/orders" element={<OpenOrders />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/configuration" element={<Configuration />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
