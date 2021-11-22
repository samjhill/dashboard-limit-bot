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
} from "recharts";

const TICKERS = ["btcusd", "ethusd"];

export const OpenOrders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (!orders) {
      return Promise.all(
        TICKERS.map((ticker) => {
          return fetch(
            `https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders?ticker=${ticker}`
          )
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
          tradesObj[ticker.ticker] = ticker.result;
        });
        setOrders(tradesObj);
      });
    }
  }, [orders, setOrders]);

  if (!orders) {
    return null;
  }

  return (
    <>
      <Text as="h2" mt="4" ml="2" textAlign="left">
        Open Orders
      </Text>

      <Flex width="100%">
        {TICKERS.map((ticker) => (
          <Flex width={1}>
            <Box width={1 / 2}>
              {orders[ticker] && (
                <Box mt="2" mb="2">
                  <Text as="h3">Open orders: {ticker}</Text>
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

                      <Scatter dataKey="price" fill="white" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </Box>
              )}
            </Box>

            <Box key={ticker} ml="2" width={1 / 2}>
              <table ml="4">
                <thead>
                  <tr>
                    <th>Placed on</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders[ticker] &&
                    Object.values(orders[ticker]).map((trade) => (
                      <tr key={trade.tid}>
                        <td>{trade.datetime}</td>
                        <td>${trade.price}</td>
                        <td>{trade.remaining_amount}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
