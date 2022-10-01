import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Reminders = () => {
  return (
    <Box>
      <Box textAlign={"right"} marginBottom="20px">
        <Flex>
          <Text>If</Text>
          <Text>(select team members)</Text>
          <Text>tracked</Text>
          <Text>Less</Text>
          <Text>than</Text>
          <Text>8</Text>
          <Text>hours per</Text>
          <Text>Week</Text>
          <Text>, send</Text>
          <Text>Them</Text>
          <Text>a reminder</Text>
        </Flex>
        <Button bg="#03A9F4">ADD</Button>
      </Box>
      <Box bg="#e4eaee" w="100%" p={4} color="#999999">
        Reminders
      </Box>
    </Box>
  );
};

export default Reminders;
