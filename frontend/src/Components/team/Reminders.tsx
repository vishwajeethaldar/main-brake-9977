import { Box, Button, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Reminders = () => {
  return (
    <Box>
      <Flex justifyContent={"right"} marginBottom="20px" gap={"15px"}>
        <Wrap>
          <WrapItem>
          <Flex justifyContent={"right"}>
          <Text>If</Text>
          <Text marginLeft={"5px"} color={"#03a9f4"}>
            (select team members)
          </Text>
          <Text marginLeft={"5px"}>tracked</Text>
          <Text marginLeft={"5px"} color={"#03a9f4"}>
            Less
          </Text>
          <Text marginLeft={"5px"}>than</Text>
          <Text marginLeft={"5px"} color={"#03a9f4"}>
            8
          </Text>
          <Text marginLeft={"5px"}>hours per</Text>
          <Text marginLeft={"5px"} color={"#03a9f4"}>
            Week
          </Text>
          <Text marginLeft={"5px"}>, send</Text>
          <Text marginLeft={"5px"} color={"#03a9f4"}>
            Them
          </Text>
          <Text marginLeft={"5px"}>a reminder</Text>
        </Flex>
          </WrapItem>
          <WrapItem>
          <Button bg="#03A9F4">ADD</Button>
          </WrapItem>
        </Wrap>
        
        
      </Flex>
      <Box bg="#e4eaee" w="100%" p={4} color="#999999">
        Reminders
      </Box>
    </Box>
  );
};

export default Reminders;
