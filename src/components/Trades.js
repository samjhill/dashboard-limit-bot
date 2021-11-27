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

export const Trades = () => {
  const [trades, setTrades] = useState();

  useEffect(() => {
    if (!trades) {
      return Promise.all(
        TICKERS.map((ticker) => {
          return fetch(
            `https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list?ticker=${ticker}`
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
        trades
          .map((ticker) => {
            tradesObj[ticker.ticker] = ticker.result.reverse();
          });
        setTrades(tradesObj);
      });
    }
  }, [trades, setTrades]);

  if (!trades) {
    return <Text as="h1">Loading...</Text>;
  }

  return (
    <>
      <Text as="h2" mt="4" ml="2" textAlign="left">
        Buy History
      </Text>

      <Flex width={1} flexDirection={["column", "row"]}>
        {TICKERS.map((ticker) => (
          <Flex
            key={ticker}
            width={[1, 1 / 2]}
            flexDirection={["column", "row"]}
          >
            <Box width={[1, 1 / 2]}>
              {trades[ticker] && (
                <Box mt="2" mb="2">
                  <Text as="h3">Buy history: {ticker}</Text>
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

                      <Scatter dataKey="price" fill="white" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </Box>
              )}
            </Box>

            <Box key={ticker} ml="2" width={[1, 1 / 2]}>
              <table ml="4">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {trades[ticker] &&
                    Object.values(trades[ticker])
                      .reverse()
                      .map((trade) => (
                        <tr key={trade.tid}>
                          <td>{trade.datetime}</td>
                          <td>${trade.price}</td>
                          <td>{trade.amount}</td>
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
