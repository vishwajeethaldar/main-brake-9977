import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Reminders = () => {
  return (
    <Box>
      <Box textAlign={"right"}>
        If(select team members) tracked Less than 8 hours per Week, send Thema
        reminder <Button bg="#03A9F4">ADD</Button>
      </Box>
      <Box bg="#e4eaee" w="100%" p={4} color="#999999">
        This is the Box
      </Box>
    </Box>
  );
};

export default Reminders;
