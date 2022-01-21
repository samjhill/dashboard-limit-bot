import { Box, Text } from "rebass";

const LogEntry = ({ title, text, date }) => {
    return (
      <Box mt="2" mb="4" p="3" backgroundColor="#0000001f" maxWidth="800px">
        <Text as="h1">{title}</Text>
        <Text as="h4">{date}</Text>
        <Box mt="3">
          <Text>{text}</Text>
        </Box>
      </Box>
    );
};

export const BuildLog = () => {
    const LogEntries = [
      {
        title: "It's alive!",
        text: "This robot has been running for about a month. It's my first try at automating `buy the dip` consistently over time, and automated trading in general. It's doing pretty well right now - it has a 5% USD price advantage compared to the baseline. It's mostly just a learning project for me, but if the advantage maintains or even grows, that would be just swell.",
        date: "Fri Jan 21, 2022",
      },
    ];
    return (
      <Box textAlign="left" ml="2" mt="4">
        <Text as="h2" mb="2">Build Log</Text>

        {LogEntries.map(entry => (
            <LogEntry {...entry} />
        ))}
      </Box>
    );
};