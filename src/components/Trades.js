import moment from "moment";
import { useEffect, useState } from "react";
import { Box, Text, Flex } from "rebass";

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
                return { ticker: ticker, result: result };
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
          trades.map(ticker => {
              tradesObj[ticker.ticker] = ticker.result;
          });
          setTrades(tradesObj);
        });
    }
  }, [trades, setTrades]);

  if (!trades) {
    return null;
  }

  return (
    <>
      <Text as="h2" mt="4" ml="2" textAlign="left">
        Buys
      </Text>

      {TICKERS.map((ticker) => (
        <Box key={ticker} ml="2">
          <Text textAlign="left" my="2">
            {ticker}
          </Text>
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
                Object.values(trades[ticker]).map((trade) => (
                  <tr key={trade.tid}>
                    <td>{moment(trade.timestamp).format("MM/DD h:mm a")}</td>
                    <td>${trade.price}</td>
                    <td>{trade.amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Box>
      ))}
    </>
  );
};
