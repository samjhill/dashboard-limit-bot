import moment from "moment";
import { useEffect, useState } from "react";
import { Box, Text, Flex } from "rebass";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { groupBy } from "underscore";

export const Stats = () => {
  const [stats, setStats] = useState();

  useEffect(() => {
    if (!stats) {
      fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats")
        .then((res) => res.json())
        .then(
          (result) => {
            setStats(result);
            console.log(result)
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }, [stats, setStats]);

  if (!stats) {
    return null;
  }

  const groupedStats = groupBy(stats, (stat) => {
    return moment(stat.datetime).startOf("day").format();
  });

  const savingsPercentages = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          savings: stat.savings_percent,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [cur.ticker]: cur.savings,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));


  const coinAmounts = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          actualCoinAmount: stat.actual_coin_amount,
          comparisonCoinAmount: stat.comparison_coin_amount,
          ticker: stat.ticker
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}Actual`]: cur.actualCoinAmount,
            [`${cur.ticker}Comparison`]: cur.comparisonCoinAmount,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));


    const dollarsSpent = Object.values(groupedStats)
      .map((statsForDay) =>
        statsForDay
          .map((stat) => ({
            name: moment(stat.datetime).format("MM/DD/YY"),
            totalSpend: stat.total_spend,
            ticker: stat.ticker,
          }))
          .reduce(
            (prev, cur) => ({
              ...prev,
              name: cur.name,
              [`${cur.ticker}TotalSpend`]: cur.totalSpend,
            }),
            {}
          )
      )
      .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));


    const coinsPurchased = Object.values(groupedStats)
      .map((statsForDay) =>
        statsForDay
          .map((stat) => ({
            name: moment(stat.datetime).format("MM/DD/YY"),
            actualCoinAmount: stat.actual_coin_amount,
            ticker: stat.ticker,
          }))
          .reduce(
            (prev, cur) => ({
              ...prev,
              name: cur.name,
              [`${cur.ticker}CoinAmount`]: cur.actualCoinAmount,
            }),
            {}
          )
      )
      .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));
    
    const dcaComparisonAveragePrice = Object.values(groupedStats)
      .map((statsForDay) =>
        statsForDay
          .map((stat) => ({
            name: moment(stat.datetime).format("MM/DD/YY"),
            averageDcaPrice: stat.average_dca_price,
            ticker: stat.ticker,
          }))
          .reduce(
            (prev, cur) => ({
              ...prev,
              name: cur.name,
              [`${cur.ticker}AverageDcaPrice`]: cur.averageDcaPrice,
            }),
            {}
          )
      )
      .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const btcDollarsSpent =
    dollarsSpent[dollarsSpent.length - 1].btcusdTotalSpend;
  const ethDollarsSpent =
    dollarsSpent[dollarsSpent.length - 1].ethusdTotalSpend;

  const btcCoinsPurchased =
    coinsPurchased[coinsPurchased.length - 1].btcusdCoinAmount;

  const ethCoinsPurchased =
    coinsPurchased[coinsPurchased.length - 1].ethusdCoinAmount;

  const btcDcaComparisonPrice =
    dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1]
      .btcusdAverageDcaPrice;

  const ethDcaComparisonPrice =
    dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1]
      .ethusdAverageDcaPrice;

  return (
    <>
      <Box textAlign="left" p="2">
        <Text as="h3">Dollars spent</Text>
        <Text>Bitcoin: ${btcDollarsSpent}</Text>
        <Text>Ethereum: ${ethDollarsSpent}</Text>
      </Box>
      <Box textAlign="left" p="2">
        <Text as="h3">Coins purchased</Text>
        <Text>Bitcoin: {btcCoinsPurchased}</Text>
        <Text>Ethereum: {ethCoinsPurchased}</Text>
      </Box>
      <Box textAlign="left" p="2">
        <Text as="h3">Average price per coin</Text>
        <Text>Bitcoin: ${Math.round(btcDollarsSpent / btcCoinsPurchased)}</Text>
        <Text>
          Ethereum: ${Math.round(ethDollarsSpent / ethCoinsPurchased)}
        </Text>
      </Box>
      <Box textAlign="left" p="2">
        <Text as="h3">Price per coin if we used a Dollar-Cost-Average strategy</Text>
        <Text>Bitcoin: ${btcDcaComparisonPrice}</Text>
        <Text>Ethereum: ${ethDcaComparisonPrice}</Text>
      </Box>
      <Box textAlign="left" p="2">
        <Text as="h3">Advantage compared to DCA</Text>
        <Text>
          Bitcoin: {savingsPercentages[savingsPercentages.length - 1].btcusd}%
        </Text>
        <Text>
          Ethereum: {savingsPercentages[savingsPercentages.length - 1].ethusd}%
        </Text>
      </Box>
      <Flex flexDirection={["column", "row"]}>
        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Advantage compared to DCA</Text>
          <Text>(percentage dollars saved per coin)</Text>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={savingsPercentages}
              margin={{ top: 5, right: 5, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <CartesianGrid />
              <Line
                type="monotone"
                dataKey="btcusd"
                stroke="orange"
                yAxisId={0}
              />
              <Line
                type="monotone"
                dataKey="ethusd"
                stroke="#407aff"
                yAxisId={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Bitcoin: coin amounts compared to DCA</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={coinAmounts}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="btcusdActual" name="actual" fill="#8884d8" />
              <Bar
                dataKey="btcusdComparison"
                name="comparison"
                fill="#82ca9d"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Ethereum: coin amounts compared to DCA</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={400}
              height={400}
              data={coinAmounts}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ethusdActual" name="actual" fill="#8884d8" />
              <Bar
                dataKey="ethusdComparison"
                name="comparison"
                fill="#82ca9d"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};
