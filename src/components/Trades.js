import moment from "moment";
import { useEffect, useState } from "react";
import { Box, Text, Flex } from "rebass";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ReferenceLine
} from "recharts";
import { API_URLS, ENV } from "../App";
import { getPrices } from "../helpers/prices";
import { getTradingPairs } from "../helpers/tradingPairs";
import { COLORS } from "../helpers/colors";
import { Table } from "../components/Table";


export const Trades = () => {
  const [trades, setTrades] = useState();
  const [prices, setPrices] = useState();
  const [tradingPairs, setTradingPairs] = useState();

  useEffect(() => {
    async function fetchPrices() {
      const prices = await getPrices();
      setPrices(prices);
    }

    async function fetchTradingPairs() {
      const tradingPairs = await getTradingPairs();
      setTradingPairs(tradingPairs);
    }

    if (!prices) {
      fetchPrices();
    }
    if (!tradingPairs) {
      fetchTradingPairs();
    }

    if (!trades && tradingPairs) {
      return Promise.all(
        tradingPairs.map(({ name, ticker }) => {
          return fetch(`${API_URLS.getTradesList[ENV]}?ticker=${ticker}`)
            .then((res) => res.json())
            .then(
              (result) => {
                const trades = result.map((trade) => ({
                  ...trade,
                  datetime: moment(trade.timestampms).format("MM/DD h:mm a"),
                }));
                return { ticker: ticker, result: trades };
              },
              (error) => {
                console.error(error);
              }
            );
        })
      ).then((result) => {
        const trades = Object.values(result);
        let tradesObj = {};
        // eslint-disable-next-line array-callback-return
        trades.map((ticker) => {
          tradesObj[ticker.ticker] = ticker.result.reverse();
        });
        setTrades(tradesObj);
      });
    }
  }, [trades, setTrades, prices, setPrices, tradingPairs, setTradingPairs]);

  if (!trades) {
    return <Text as="h1">Loading...</Text>;
  }

  return (
    <>
      <Text as="h2" mt="4" ml="2" textAlign="left">
        Buy History
      </Text>

      <Flex width={1} flexDirection={["column", "row"]}>
        {tradingPairs.map(({ name, ticker }) => (
          <Flex
            key={ticker}
            width={[1, 1 / 2]}
            flexDirection={["column", "row"]}
          >
            <Box width={[1, 1 / 2]}>
              {trades[ticker] && (
                <Box mt="2" mb="2">
                  <Text as="h3" color={COLORS[ticker]}>
                    {name}
                  </Text>
                  <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                      data={trades[ticker]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid stroke="#333" />
                      <XAxis dataKey="datetime" stroke="#ebebeb" />
                      <YAxis stroke="#ebebeb" />
                      <Tooltip />
                      <Legend />
                      {prices && prices[ticker] && (
                        <ReferenceLine
                          y={prices[ticker]}
                          stroke={COLORS[ticker]}
                          alwaysShow={true}
                          label={{
                            value: `current price - $${prices[
                              ticker
                            ].toLocaleString()}`,
                            fill: "white",
                          }}
                          color="white"
                        />
                      )}
                      <Scatter dataKey="price" fill="white" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </Box>
              )}
            </Box>

            <Box key={ticker} ml="2" width={[1, 1 / 2]}>
              {trades[ticker] && (
                <Table
                  headers={["Date", "Price", "Amount"]}
                  rows={Object.values(trades[ticker])
                    .reverse()
                    .map((trade) => [
                      trade.datetime,
                      `$${parseFloat(trade.price).toLocaleString()}`,
                      trade.amount,
                    ])}
                />
              )}
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
