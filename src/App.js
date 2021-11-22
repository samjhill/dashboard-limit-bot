import './App.css';
import { Configuration } from "./components/Configuration";
import { Stats } from "./components/Stats";
import { Trades } from "./components/Trades";
import { OpenOrders } from "./components/OpenOrders";

function App() {
  
  return (
    <div className="App">
      <OpenOrders />
      <Stats />
      <Configuration />
      <Trades />
    </div>
  );
}

export default App;
