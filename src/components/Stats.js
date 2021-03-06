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
import { useLocation } from "react-router-dom";
import { groupBy } from "underscore";
import { API_URLS, ENV } from "../App";
import { getTradingPairs } from "../helpers/tradingPairs";
import { getStatsForTicker } from "../helpers/stats";
import { COLORS } from "../helpers/colors";
import { TradingPairSelector } from "../components/TradingPairSelector";

// statItems: { title, statItem }[]
const StatComparisonBox = ({ statItems }) => {
  if (!statItems) {
    return;
  }
  return (
    <Flex>
      {statItems.map((item) => (
        <Flex flexDirection="column" mr="4">
          <Text color={item.color || "text"}>{item.title}</Text>
          <Text key={item.title}>{item.statItem}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export const Stats = () => {
  const location = useLocation();
  const ticker =
    process.env.NODE_ENV === "development"
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[3];
  const selectedTicker = ticker === "*" ? "btcusd" : ticker;
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

  const groupedStats = groupBy(stats, (stat) => {
    return moment(stat.datetime).startOf("day").format();
  });

  if (!tradingPairs) {
    return <Text as="h1">Loading...</Text>;
  }

  const statsForPairs = tradingPairs.map(({ name, ticker }) => {
    return getStatsForTicker({ groupedStats, ticker });
  });

  if (!statsForPairs) {
    return <Text as="h1">Loading...</Text>;
  }

  const findStatsForPair = (ticker) =>
    statsForPairs.find((stats) => [stats.ticker].includes(ticker));

  const profit =
    findStatsForPair(selectedTicker).actualCoinValue -
    findStatsForPair(selectedTicker).totalSpend;

  const comparisonProfit =
    findStatsForPair(selectedTicker).dcaComparisonCoinValue -
    findStatsForPair(selectedTicker).comparisonTotalSpend;

  if (statsForPairs.length !== tradingPairs.length) {
    return <Text as="h1">Loading stats</Text>;
  }

  return (
    <>
      <Flex>
        <TradingPairSelector path="stats" />
      </Flex>
      <Text mt="2">Stats update every 24 hours</Text>
      <Flex
        flexDirection={["column", "row"]}
        mb="4"
        mt="2"
        w={1}
        justifyContent="space-between"
      >
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Dollars spent</Text>
          <StatComparisonBox
            statItems={[
              {
                title: "comparison",
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).comparisonTotalSpend.toLocaleString()}`,
              },
              {
                title: "actual",
                color: COLORS[selectedTicker],
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).totalSpend.toLocaleString()}`,
              },
            ]}
          />
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Current value (USD)</Text>
          <StatComparisonBox
            statItems={[
              {
                title: "comparison",
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).dcaComparisonCoinValue.toLocaleString()}`,
              },
              {
                title: "actual",
                color: COLORS[selectedTicker],
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).actualCoinValue.toLocaleString()}`,
              },
            ]}
          />
        </Box>

        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Profit (USD)</Text>
          <StatComparisonBox
            statItems={[
              {
                title: "comparison",
                statItem: `$
                  ${comparisonProfit.toLocaleString()}`,
              },
              {
                title: "actual",
                color: COLORS[selectedTicker],
                statItem: `$
                  ${profit.toLocaleString()}`,
              },
            ]}
          />
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Coins purchased</Text>
          {findStatsForPair(selectedTicker) && (
            <Text key={selectedTicker}>
              {findStatsForPair(selectedTicker).totalCoinsPurchased}
            </Text>
          )}
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Price per coin</Text>
          <StatComparisonBox
            statItems={[
              {
                title: "comparison",
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).dcaComparisonPrice.toLocaleString()}`,
              },
              {
                title: "actual",
                color: COLORS[selectedTicker],
                statItem: `$
                  ${findStatsForPair(
                    selectedTicker
                  ).limitStrategyPrice.toLocaleString()}`,
              },
            ]}
          />
        </Box>
        <Box textAlign="left" p="2" minWidth="200px">
          <Text as="h3">Advantage compared to DCA</Text>
          <Text>percentage dollars saved per coin</Text>
          <Text>
            {
              findStatsForPair(selectedTicker)?.savingsPercentages[
                findStatsForPair(selectedTicker)?.savingsPercentages.length - 1
              ][selectedTicker]
            }
            %
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection={["column", "row"]} flexWrap="wrap">
        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">price per coin comparison</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: findStatsForPair(selectedTicker)?.dcaComparisonPrice,
                  limit: findStatsForPair(selectedTicker)?.limitStrategyPrice,
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
              <Bar
                dataKey="limit"
                name="limit strategy"
                fill={COLORS[selectedTicker]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">coin amounts compared to DCA</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={findStatsForPair(selectedTicker)?.coinAmounts}
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
                dataKey={`${selectedTicker}Comparison`}
                name="comparison"
                fill={COLORS.comparison}
              />
              <Bar
                dataKey={`${selectedTicker}Actual`}
                name="actual"
                fill={COLORS[selectedTicker]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">coin value, in dollars</Text>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={[
                {
                  dca: findStatsForPair(selectedTicker)?.dcaComparisonCoinValue,
                  limit: findStatsForPair(selectedTicker)?.actualCoinValue,
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
              <Bar
                dataKey="limit"
                name="limit strategy"
                fill={COLORS[selectedTicker]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box width={[1, 1 / 3]} mt="2" mb="2">
          <Text as="h3">Limit strategy advantage over time</Text>
          <Text>(percentage dollars saved per coin)</Text>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={findStatsForPair(selectedTicker)?.savingsPercentages}
              margin={{ top: 5, right: 5, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" stroke="#ebebeb" />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#333" />
              {/* {tradingPairs.map(({ ticker }, index) => ( */}
              <Line
                type="monotone"
                dataKey={ticker}
                stroke={COLORS[ticker]}
                // yAxisId={index}
                key={ticker}
              />
              {/* ))} */}
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};
