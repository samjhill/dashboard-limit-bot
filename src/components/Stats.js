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

const COLORS = {
  btc: "orange",
  eth: "#407aff",
  comparison: "grey",
};

export const Stats = () => {
  const [stats, setStats] = useState();

  useEffect(() => {
    if (!stats) {
      fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats")
        .then((res) => res.json())
        .then(
          (result) => {
            setStats(result);
            console.log(result);
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

  const statsSortedByDay = stats.sort(
    (a, b) => moment(a.datetime) - moment(b.datetime)
  );

  const lastUpdated = moment(
    statsSortedByDay[statsSortedByDay.length - 1].datetime
  );
  const nextUpdate = lastUpdated.add(24, "hours");

  const hoursUntilUpdate = moment.duration(nextUpdate.diff(moment())).asHours();

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
          ticker: stat.ticker,
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

  const marketPrice = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          currentPrice: stat.current_price,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}CurrentPrice`]: cur.currentPrice,
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

  const btcLimitStrategyPrice = Math.round(btcDollarsSpent / btcCoinsPurchased);
  const btcDcaComparisonPrice =
    dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1]
      .btcusdAverageDcaPrice;

  const ethLimitStrategyPrice = Math.round(ethDollarsSpent / ethCoinsPurchased);
  const ethDcaComparisonPrice =
    dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1]
      .ethusdAverageDcaPrice;

  const btcLatestPrice = parseFloat(
    marketPrice[marketPrice.length - 1].btcusdCurrentPrice
  );
  const ethLatestPrice = parseFloat(
    marketPrice[marketPrice.length - 1].ethusdCurrentPrice
  );

  const btcDcaComparisonCoinValue =
    coinAmounts[coinAmounts.length - 1].btcusdComparison * btcLatestPrice;
  const btcActualCoinValue =
    coinAmounts[coinAmounts.length - 1].btcusdActual * btcLatestPrice;
  const ethDcaComparisonCoinValue =
    coinAmounts[coinAmounts.length - 1].ethusdComparison * ethLatestPrice;
  const ethActualCoinValue =
    coinAmounts[coinAmounts.length - 1].ethusdActual * ethLatestPrice;

  return (
    <>
      <Text mt="2">Stats update in {Math.round(hoursUntilUpdate)} hours</Text>
      <Flex
        flexDirection={["column", "row"]}
        mb="4"
        mt="2"
        w={1}
        justifyContent="space-between"
      >
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Dollars spent</Text>
          <Text>Bitcoin: ${btcDollarsSpent}</Text>
          <Text>Ethereum: ${ethDollarsSpent}</Text>
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Coins purchased</Text>
          <Text>Bitcoin: {btcCoinsPurchased}</Text>
          <Text>Ethereum: {ethCoinsPurchased}</Text>
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Price per coin: Dollar-Cost-Average strategy</Text>
          <Text>Bitcoin: ${btcDcaComparisonPrice}</Text>
          <Text>Ethereum: ${ethDcaComparisonPrice}</Text>
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Price per coin: Limit Strategy</Text>
          <Text>Bitcoin: ${btcLimitStrategyPrice}</Text>
          <Text>Ethereum: ${ethLimitStrategyPrice}</Text>
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Advantage compared to DCA</Text>
          <Text>
            Bitcoin: {savingsPercentages[savingsPercentages.length - 1].btcusd}%
          </Text>
          <Text>
            Ethereum: {savingsPercentages[savingsPercentages.length - 1].ethusd}
            %
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection={["column", "row"]} flexWrap="wrap">
        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Bitcoin: price per coin comparison</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: btcDcaComparisonPrice,
                  limit: btcLimitStrategyPrice,
                },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar dataKey="dca" name="dca strategy" fill={COLORS.comparison} />
              <Bar dataKey="limit" name="limit strategy" fill={COLORS.btc} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Ethereum: price per coin comparison</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: ethDcaComparisonPrice,
                  limit: ethLimitStrategyPrice,
                },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar dataKey="dca" name="dca strategy" fill={COLORS.comparison} />
              <Bar dataKey="limit" name="limit strategy" fill={COLORS.eth} />
            </BarChart>
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
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="btcusdComparison"
                name="comparison"
                fill={COLORS.comparison}
              />
              <Bar dataKey="btcusdActual" name="actual" fill={COLORS.btc} />
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
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="ethusdComparison"
                name="comparison"
                fill={COLORS.comparison}
              />
              <Bar dataKey="ethusdActual" name="actual" fill={COLORS.eth} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Bitcoin: coin value, in dollars</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: btcDcaComparisonCoinValue,
                  limit: btcActualCoinValue,
                },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar dataKey="dca" name="dca strategy" fill={COLORS.comparison} />
              <Bar dataKey="limit" name="limit strategy" fill={COLORS.btc} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Ethereum: coin value, in dollars</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: ethDcaComparisonCoinValue,
                  limit: ethActualCoinValue,
                },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#333" />
              <XAxis dataKey="name" stroke="#ebebeb" />
              <YAxis stroke="#ebebeb" />
              <Tooltip />
              <Legend />

              <Bar dataKey="dca" name="dca strategy" fill={COLORS.comparison} />
              <Bar dataKey="limit" name="limit strategy" fill={COLORS.eth} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Limit strategy advantage over time</Text>
          <Text>(percentage dollars saved per coin)</Text>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={savingsPercentages}
              margin={{ top: 5, right: 5, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" stroke="#ebebeb" />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#333" />
              <Line
                type="monotone"
                dataKey="btcusd"
                stroke={COLORS.btc}
                yAxisId={0}
              />
              <Line
                type="monotone"
                dataKey="ethusd"
                stroke={COLORS.eth}
                yAxisId={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};
