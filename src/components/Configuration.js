import { useEffect, useState } from "react";
import { Box, Text } from "rebass";
import { API_URLS, ENV } from "../App";

export const Configuration = () => {
  const [config, setConfig] = useState();

  useEffect(() => {
    if (!config) {
      fetch(
        API_URLS.getConfiguration[ENV]
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setConfig(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }, [config, setConfig]);

  if (!config) {
    return <Text as="h1">Loading...</Text>;
  }

  return (
    <Box textAlign="left" pl="2">
      <Text as="h2" mb="2">
        Configuration
      </Text>

      <Box mb="2">
        <Text as="h3">Limits</Text>
        <Text>Maximum daily spend: ${config.maximum_daily_spend}</Text>
        <Text>Maximum weekly spend: ${config.maximum_weekly_spend}</Text>
        <Text>Maximum monthly spend: ${config.maximum_monthly_spend}</Text>
      </Box>

      <Box mb="2">
        <Text as="h3">Orders</Text>
        <Text>Number of orders: {config.num_orders}</Text>
        <Text>Percentage interval down: {config.interval_size * 100}%</Text>
        <Text>
          Comparison dollar-cost-average amount: ${config.daily_dca_amount}
        </Text>
      </Box>
    </Box>
  );
};
