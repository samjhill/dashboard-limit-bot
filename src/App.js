import './App.css';
import { Configuration } from "./components/Configuration";
import { Stats } from "./components/Stats";
import { Trades } from "./components/Trades";

function App() {
  
  return (
    <div className="App">
      <Stats />
      <Configuration />
      <Trades />
    </div>
  );
}

export default App;
