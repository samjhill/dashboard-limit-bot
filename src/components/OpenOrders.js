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
import { COLORS } from "../helpers/colors";
import { Table } from "../components/Table";

const TICKERS = ["btcusd", "ethusd"];

export const OpenOrders = () => {
  const [orders, setOrders] = useState();
  const [prices, setPrices] = useState();

  useEffect(() => {
    async function fetchPrices() {
      const prices = await getPrices();
      setPrices(prices);
    }

    if (!prices) {
      fetchPrices();
    }
    if (!orders) {
      return Promise.all(
        TICKERS.map((ticker) => {
          return fetch(`${API_URLS.getOpenOrders[ENV]}?ticker=${ticker}`)
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
        trades?.map((ticker) => {
          tradesObj[ticker?.ticker] = ticker?.result;
        });
        setOrders(tradesObj);
      });
    }
  }, [prices, setPrices, orders, setOrders]);

  if (!orders) {
    return <Text as="h1">Loading...</Text>;
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
        {TICKERS.map((ticker) => (
          <Flex
            key={ticker}
            width={[1, 1 / 2]}
            flexDirection={["column", "row"]}
          >
            <Box width={[1, 1 / 2]}>
              {orders[ticker] && (
                <Box mt="2" mb="2" width={1}>
                  <Text as="h3" mb="2" color={COLORS[ticker]}>
                    {ticker}
                  </Text>
                  <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                      data={orders[ticker]}
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
                            value: `current price - $${prices[ticker]}`,
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
              {orders[ticker] && (
                <Table
                  headers={["Placed on", "Price", "Amount"]}
                  rows={Object.values(orders[ticker]).map((trade) => [
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
