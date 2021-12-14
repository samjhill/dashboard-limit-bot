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
  ReferenceLine,
} from "recharts";
import { API_URLS, ENV } from "../App";
import { getPrices } from "../helpers/prices";
import { getTradingPairs } from "../helpers/tradingPairs";
import { COLORS } from "../helpers/colors";
import { Table } from "../components/Table";


export const OpenOrders = () => {
  const [orders, setOrders] = useState();
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
    if (!orders && tradingPairs) {
      return Promise.all(
        tradingPairs.map((pair) => {
          return fetch(`${API_URLS.getOpenOrders[ENV]}?ticker=${pair.ticker}`)
            .then((res) => res.json())
            .then(
              (result) => {
                const trades = result.map((trade) => ({
                  ...trade,
                  datetime: moment(trade.timestampms).format("MM/DD h:mm a"),
                }));
                return { ticker: pair.ticker, result: trades };
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
        trades?.map((ticker) => {
          tradesObj[ticker?.ticker] = ticker?.result;
        });
        setOrders(tradesObj);
      });
    }
  }, [prices, setPrices, orders, setOrders, tradingPairs, setTradingPairs]);

  if (!orders) {
    return <Text as="h1">Loading orders...</Text>;
  }

  if (!tradingPairs) {
    return <Text as="h1">Loading trading pairs...</Text>;
  }

  return (
    <>
      <Text as="h1" mt="4" ml="2" mb="2" textAlign="left">
        Open Orders
      </Text>

      <Text textAlign="left" ml="2" mb="4">
        If the asset's{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          price (green line)
        </span>{" "}
        drops down to any of the{" "}
        <strong>white dots (open limit-buy orders)</strong>, the buy order gets
        automatically triggered. Then, I create new orders based on the new
        price.
      </Text>

      <Flex width={1} flexDirection={["column", "row"]}>
        {tradingPairs.map((pair) => (
          <Flex
            key={pair.ticker}
            width={[1, 1 / 2]}
            flexDirection={["column", "row"]}
          >
            <Box width={[1, 1 / 2]}>
              {orders[pair.ticker] && (
                <Box mt="2" mb="2" width={1}>
                  <Text as="h3" mb="2" color={COLORS[pair.ticker]}>
                    {pair.name}
                  </Text>
                  <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                      data={orders[pair.ticker]}
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
                      {prices && prices[pair.ticker] && (
                        <ReferenceLine
                          y={prices[pair.ticker]}
                          stroke={COLORS[pair.ticker]}
                          alwaysShow={true}
                          label={{
                            value: `current price - $${prices[pair.ticker]}`,
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

            <Box key={pair.ticker} ml="2" width={[1, 1 / 2]}>
              {orders[pair.ticker] && (
                <Table
                  headers={["Placed on", "Price", "Amount"]}
                  rows={Object.values(orders[pair.ticker]).map((trade) => [
                    trade.datetime,
                    `${trade.price}`,
                    trade.remaining_amount,
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
