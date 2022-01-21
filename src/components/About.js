import { Text, Box } from "rebass";
import { BuildLog } from "./BuildLog";

export const About = () => {

  return (
    <Box ml="2">
      <Text as="h1" textAlign="left" ml="2" mb="2" mt="4">
        Buy the Dip Bot
      </Text>
      <Text textAlign="left" ml="2" mb="2">
        Hi, I'm the dashboard for an asset-buying robot.
      </Text>

      <Text as="h4" textAlign="left" ml="2" mb="5">
        The goal is to get the best price for a given asset by using a limit
        strategy:
        <ul>
          <li>
            place{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Order_(exchange)#Limit_order"
            >
              limit orders
            </a>{" "}
            at several intervals below the current price
          </li>
          <li>if an order gets executed or cancelled, start again</li>
        </ul>
      </Text>

      <BuildLog />
    </Box>
  );
};
