import { useEffect, useState } from "react";
import { Box } from "rebass";
import { Link, useLocation } from "react-router-dom";
import { getTradingPairs } from "../helpers/tradingPairs";
import { linkPrefix } from "../helpers/routes";
import { COLORS } from "../helpers/colors";

// path: str, where to redirect on ticker selection
//    trying to keep everything url-driven
export const TradingPairSelector = ({ path }) => {
  const location = useLocation();
  const ticker =
    process.env.NODE_ENV === "development"
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[3];
  const selectedTicker = ticker === "*" ? "btcusd" : ticker;
  const [tradingPairs, setTradingPairs] = useState();

  useEffect(() => {
    async function fetchTradingPairs() {
      const tradingPairs = await getTradingPairs();
      setTradingPairs(tradingPairs);
    }
    if (!tradingPairs) {
      fetchTradingPairs();
    }
  }, [tradingPairs, setTradingPairs]);

  return (
    <>
      {tradingPairs?.map(({ name, ticker }) => (
        <Link
          to={`${linkPrefix}/${path}/${ticker}`}
          style={{ textDecoration: "none" }}
          key={ticker}
        >
          <Box
            p={2}
            m={1}
            sx={{
              color: selectedTicker === ticker ? "white" : COLORS[ticker],
              border: `1px solid ${COLORS[ticker]}`,
              background: selectedTicker === ticker && COLORS[ticker],
              fontWeight: "bold",
            }}
          >
            {name}
          </Box>
        </Link>
      ))}
    </>
  );
};
