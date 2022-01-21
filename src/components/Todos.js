import { Box, Text } from "rebass";

const TodoItem = ({ title, text }) => {
  return (
    <Box mt="2" mb="2" p="3" backgroundColor="#0000001f" maxWidth="800px">
      <Text>{title}</Text>
    </Box>
  );
};

export const Todos = () => {
  const TodoItems = [
    {
      title: "Add integration with traditional stock broker",
    },
    {
      title:
        "Add per-item settings for finer-grain control and customization of limit orders",
    },
    {
      title: "Update gemini client to https://github.com/mtusman/gemini-python",
    },
  ];
  return (
    <Box textAlign="left" ml="2" mt="4">
      <Text as="h2" mb="2">
        Todos
      </Text>

      {TodoItems.map((entry) => (
        <TodoItem {...entry} />
      ))}
    </Box>
  );
};
