import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Box, Flex, Text } from "rebass";
import React, { useState, useEffect } from "react";
import { ROUTES } from "./helpers/routes";

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
  const [dashboardMode, setDashboardMode] = useState(
    localStorage.getItem("dashboardModeIsEnabled") === "true"
  );
  const [dashboardInterval, setDashboardInterval] = useState(15000);

  useEffect(() => {
    let dashboardTimer;
    if (dashboardMode) {
      dashboardTimer = setInterval(() => {
        const currentRouteIndex = ROUTES.findIndex((route) =>
          window.location.pathname.includes(route.path)
        );
        const nextRoute = ROUTES[(currentRouteIndex + 1) % ROUTES.length];
        window.location.href = nextRoute.path;
      }, dashboardInterval);
    } else {
      clearInterval(dashboardTimer);
    }
  }, [dashboardMode, setDashboardMode, dashboardInterval]);

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
          padding: ".5rem",
        }}
      >
        <option value="dev">dev</option>
        <option value="prod">prod</option>
      </select>
    );
  };

  const Links = () => {
    const location = useLocation();

    return (
      <Flex flexWrap="wrap" mt="3" ml="2" flexDirection={["row"]}>
        {ROUTES.map((route) => (
          <LinkContainer isActive={location.pathname.includes(route.path)}>
            <Link to={route.path}>{route.display}</Link>
          </LinkContainer>
        ))}
      </Flex>
    );
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Flex p="2">
            <EnvSelector />
            <Box ml="3">
              <label>
                <input
                  checked={dashboardMode}
                  type="checkbox"
                  onChange={() => {
                    localStorage.setItem(
                      "dashboardModeIsEnabled",
                      !dashboardMode
                    );
                    setDashboardMode(!dashboardMode);
                  }}
                />
                Dashboard Mode
              </label>
              <Text>
                Flips through the pages every {dashboardInterval / 1000} seconds
              </Text>
            </Box>
          </Flex>
          <Links />
          <Routes>
            {ROUTES.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
