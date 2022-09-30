import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ApplyFilter } from './ApplyFilter'
import { Search } from './Search'

export const Filter = () => {
  return (
    <Flex gap={"20px"} justify={"space-between"} align={"center"} direction={["column","column", "column","row"]} w="100%" border={"1px solid #999"} minH="50px" py="20px" px="10px">
        <Box w={["100%","100%","100%","50%"]}>  
            <Flex justify={"space-around"} pr="20px" pl="10px" wrap={"wrap"}>
              <Box w={["50%","50%","20%","20%"]} _hover={{cursor:"pointer"}} display={["none","none","none","block"]}>
                <Text>Filter</Text>
              </Box>
              <Box w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text>Active</Text>
              </Box>
              <Box w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text>Client</Text>
              </Box>
              <Box w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text>Access</Text>
              </Box>
              <Box w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text>Billing</Text>
              </Box>
            </Flex>
        </Box>

        <Box w={["98%","98%","98%","48%"]} >
            <Flex gap={"10px"} justify="space-between" border={"1px solid #ccc"}>
             <Box w="75%">
                <Search/>
             </Box>

             <Box>
                <ApplyFilter />
             </Box>
            </Flex>
        </Box>
    </Flex>
  )
}
