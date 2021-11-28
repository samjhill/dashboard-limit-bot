import "./App.css";
import { Configuration } from "./components/Configuration";
import { Stats } from "./components/Stats";
import { Trades } from "./components/Trades";
import { OpenOrders } from "./components/OpenOrders";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Box, Flex } from "rebass";
import React, { useState } from "react";

export const ENV = localStorage.getItem("env") || "dev";

export const API_URLS = {
  getPrice: {
    dev: "https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_price",
    prod: "https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_price",
  },
  getOpenOrders: {
    dev: "https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders",
    prod: "https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_open_orders",
  },
  getTradesList: {
    dev: "https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list",
    prod: "https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_trades_list",
  },
  getConfiguration: {
    dev: "https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration",
    prod: "https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/configuration",
  },
  getStats: {
    dev: "https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats",
    prod: "https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/stats",
  },
};

function App() {
  const linkPrefix =
    process.env.NODE_ENV === "development" ? "" : "/dashboard-limit-bot";

  const LinkContainer = ({ isActive = false, children }) => (
    <Box
      mb="4"
      mr="2"
      w="100%"
      sx={{
        a: {
          width: "100%",
          background: isActive ? "white" : "none",
          color: isActive ? "#333" : "white",
          border: "1px solid white",
          padding: ".5rem",
          textDecoration: "none",
        },
      }}
    >
      {children}
    </Box>
  );

  const EnvSelector = () => {
    const [env, setEnv] = useState(localStorage.getItem("env") || "dev");

    return (
      <select
        value={env}
        onChange={(e) => {
          setEnv(e.target.value);
          localStorage.setItem("env", e.target.value);
          window.location.reload();
        }}
        style={{
          marginBottom: "1rem",
          marginTop: ".5rem",
          padding: ".5rem"
        }}
      >
        <option value="dev">dev</option>
        <option value="prod">prod</option>
      </select>
    );
  };

  const Links = () => {
    const location = useLocation();

    const links = [
      {
        path: `${linkPrefix}/orders`,
        display: "Open Orders",
      },
      {
        path: `${linkPrefix}/stats`,
        display: "Stats",
      },
      {
        path: `${linkPrefix}/trades`,
        display: "Buy History",
      },
      {
        path: `${linkPrefix}/configuration`,
        display: "Configuration",
      },
    ];

    return (
      <Flex flexWrap="wrap" mt="3" ml="2" flexDirection={["row"]}>
        {links.map((link) => (
          <LinkContainer isActive={location.pathname.includes(link.path)}>
            <Link to={link.path}>{link.display}</Link>
          </LinkContainer>
        ))}
      </Flex>
    );
  };

  return (
    <div className="App">
      <Router>
        <div>
          <EnvSelector />
          <Links />
          <Routes>
            <Route path={`${linkPrefix}/`} exact element={<OpenOrders />} />
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
