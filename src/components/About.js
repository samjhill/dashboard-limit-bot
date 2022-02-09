import { Text, Box, Button, Flex } from "rebass";
import { COLORS } from "../helpers/colors";
import { BuildLog } from "./BuildLog";
import { MailingList } from "./MailingList";
import { Todos } from "./Todos";

export const About = () => {

  return (
    <Box ml="2">
      <Box backgroundColor="#0000001f" maxWidth="800px" p="2">
        <Text as="h1" textAlign="left" ml="2" mb="4" mt="4">
          <Text color={COLORS.btc} as="span">
            Buy the Dip{" "}
          </Text>{" "}
          Bot
        </Text>
        <Text textAlign="left" ml="2" mb="2">
          Hi, I'm the dashboard for an asset-buying robot.
        </Text>

        <Text as="h4" textAlign="left" ml="2" mb="2">
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

        <Flex>
          <Text textAlign="left" ml="2" mb="3" mt="2">
            Created by{" "}
            <a href="https://github.com/samjhill" target="_blank">
              Sam Hill
            </a>
          </Text>

          <Button
            sx={{
              cursor: "pointer",
            }}
            ml="4"
            backgroundColor="orange"
            fontWeight="bold"
            height="2.5rem"
            onClick={() =>
              window.open(
                "mailto:samuhill+limitBot@gmail.com?subject=Buy%20the%20Dip%20Bot"
              )
            }
          >
            Contact me
          </Button>
        </Flex>
      </Box>

      <Box backgroundColor="#0000001f" maxWidth="800px" p="2" mt="2" textAlign="left">
        <Text as="h2">FAQs</Text>
        <Box mt="3" mb="2">
          <Text as="h3" mb="2">How do I use this bot?</Text>
          <Text>You can't. It's still in development. But if you sign up for the mailing list, I'll keep you updated!</Text>
        </Box>

      </Box>
      <Box backgroundColor="#0000001f" maxWidth="800px" p="2" mt="2">
        <MailingList />
      </Box>

      <Todos />

      <BuildLog />
    </Box>
  );
};
