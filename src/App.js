import './App.css';
import { Configuration } from "./components/Configuration";
import { Stats } from "./components/Stats";
import { Trades } from "./components/Trades";
import { OpenOrders } from "./components/OpenOrders";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const linkPrefix =
    process.env.NODE_ENV === "development" ? "" : "/dashboard-limit-bot";

  return (
    <div className="App">
      <Router>
        <div>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>
              <Link to={`${linkPrefix}/orders`}>Open Orders</Link>
            </li>
            <li>
              <Link to={`${linkPrefix}/stats`}>Stats</Link>
            </li>
            <li>
              <Link to={`${linkPrefix}/trades`}>Buy History</Link>
            </li>
            <li>
              <Link to={`${linkPrefix}/configuration`}>Configuration</Link>
            </li>
          </ul>

          <Routes>
            <Route
              path={`${linkPrefix}/`}
              exact
              element={<OpenOrders />}
            />
            <Route path={`${linkPrefix}/orders`} element={<OpenOrders />} />
            <Route path={`${linkPrefix}/stats`} element={<Stats />} />
            <Route path={`${linkPrefix}/trades`} element={<Trades />} />
            <Route
              path={`${linkPrefix}/configuration`}
              element={<Configuration />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
