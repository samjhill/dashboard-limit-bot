import { Configuration } from "../components/Configuration";
import { Stats } from "../components/Stats";
import { Trades } from "../components/Trades";
import { OpenOrders } from "../components/OpenOrders";

const linkPrefix =
  process.env.NODE_ENV === "development" ? "" : "/dashboard-limit-bot";

export const ROUTES = [
  {
    path: `${linkPrefix}/orders`,
    display: "Open Orders",
    element: <OpenOrders />,
  },
  {
    path: `${linkPrefix}/stats`,
    display: "Stats",
    element: <Stats />,
  },
  {
    path: `${linkPrefix}/trades`,
    display: "Buy History",
    element: <Trades />,
  },
  {
    path: `${linkPrefix}/configuration`,
    display: "Configuration",
    element: <Configuration />,
  },
];
