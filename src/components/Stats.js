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
import { API_URLS, ENV } from "../App";
import { getTradingPairs } from "../helpers/tradingPairs";
import { getStatsForTicker } from "../helpers/stats";
import { COLORS } from "../helpers/colors";

export const Stats = () => {
  const [stats, setStats] = useState();
  const [tradingPairs, setTradingPairs] = useState();

  useEffect(() => {
    async function fetchTradingPairs() {
      const tradingPairs = await getTradingPairs();
      setTradingPairs(tradingPairs);
    }
    if (!tradingPairs) {
      fetchTradingPairs();
    }

    if (!stats) {
      fetch(API_URLS.getStats[ENV])
        .then((res) => res.json())
        .then(
          (result) => {
            setStats(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }, [stats, setStats, tradingPairs, setTradingPairs]);

  if (!stats) {
    return <Text as="h1">Loading...</Text>;
  }

  if (stats.length === 0) {
    return <Text as="h1">No data yet.</Text>;
  }

  const statsSortedByDay = stats.sort(
    (a, b) => moment(a.datetime) - moment(b.datetime)
  );

  const lastUpdated = moment(
    statsSortedByDay[statsSortedByDay.length - 1].datetime
  );
  const nextUpdate = moment(lastUpdated).add(24, "hours");

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

  if (!tradingPairs) {
    return <Text as="h1">Loading...</Text>;
  }

  const statsForPairs = tradingPairs
    .map(({ name, ticker }) => {
      return getStatsForTicker({ groupedStats, ticker });
    })
    // .reduce(
    //   (prev, cur) => ({
    //     ...prev,
    //     [cur.ticker]: cur,
    //   }),
    //   {}
    // );

  if (!statsForPairs) {
    return <Text as="h1">Loading...</Text>;
  }

  const findStatsForPair = (ticker) => statsForPairs.find(stats => [stats.ticker].includes(ticker));

  if (statsForPairs.length !== tradingPairs.length) {
    return <Text as="h1">Loading stats</Text>;
  }

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
          {tradingPairs.map(({ name, ticker }) => (
            <Box key={ticker}>
              {findStatsForPair(ticker) && (
                <Text key={ticker}>
                  {name}: ${findStatsForPair(ticker).totalSpend}
                </Text>
              )}
            </Box>
          ))}
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Coins purchased</Text>
          {tradingPairs.map(({ name, ticker }) => (
            <Box key={ticker}>
              {findStatsForPair(ticker) && (
                <Text key={ticker}>
                  {name}: {findStatsForPair(ticker).totalCoinsPurchased}
                </Text>
              )}
            </Box>
          ))}
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Price per coin: Dollar-Cost-Average strategy</Text>
          {tradingPairs.map(({ name, ticker }) => (
            <Box key={ticker}>
              {findStatsForPair(ticker) && (
                <Text key={ticker}>
                  {name}: ${findStatsForPair(ticker).dcaComparisonPrice}
                </Text>
              )}
            </Box>
          ))}
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Price per coin: Limit Strategy</Text>
          {tradingPairs.map(({ name, ticker }) => (
            <Box key={ticker}>
              {findStatsForPair(ticker) && (
                <Text key={ticker}>
                  {name}: ${findStatsForPair(ticker).limitStrategyPrice}
                </Text>
              )}
            </Box>
          ))}
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
        {tradingPairs.map(({ name, ticker }) => (
          <Box width={[1, 1 / 3]} mt="2" mb="2" key={ticker}>
            <Text as="h3">{name}: price per coin comparison</Text>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  {
                    dca: findStatsForPair(ticker)?.dcaComparisonPrice,
                    limit: findStatsForPair(ticker)?.limitStrategyPrice,
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

                <Bar
                  dataKey="dca"
                  name="dca strategy"
                  fill={COLORS.comparison}
                />
                <Bar dataKey="limit" name="limit strategy" fill={COLORS.btc} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        ))}

        {tradingPairs.map(({ name, ticker }) => (
          <Box width={[1, 1 / 3]} mt="2" mb="2" key={ticker}>
            <Text as="h3">{name}: coin amounts compared to DCA</Text>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={findStatsForPair(ticker)?.coinAmounts}
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
                  dataKey={`${ticker}Comparison`}
                  name="comparison"
                  fill={COLORS.comparison}
                />
                <Bar
                  dataKey={`${ticker}Actual`}
                  name="actual"
                  fill={COLORS[ticker]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        ))}

        {tradingPairs.map(({ name, ticker }) => (
          <Box width={[1, 1 / 3]} mt="2" mb="2" key={ticker}>
            <Text as="h3">{name}: coin value, in dollars</Text>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  {
                    dca: findStatsForPair(ticker)?.dcaComparisonCoinValue,
                    limit: findStatsForPair(ticker)?.actualCoinValue,
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

                <Bar
                  dataKey="dca"
                  name="dca strategy"
                  fill={COLORS.comparison}
                />
                <Bar
                  dataKey="limit"
                  name="limit strategy"
                  fill={COLORS[ticker]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        ))}

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
              {tradingPairs.map(({ ticker }, index) => (
                <Line
                  type="monotone"
                  dataKey={ticker}
                  stroke={COLORS[ticker]}
                  yAxisId={index}
                  key={ticker}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};
