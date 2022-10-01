import { Box, Flex, Text } from '@chakra-ui/react'
import {BsCaretDownFill} from 'react-icons/bs'
import { ApplyFilter } from './ApplyFilter'
import { Search } from './Search'

export const Filter = () => {
  return (
    <Flex gap={"20px"} bg="#fff" justify={"space-between"} align={"center"} direction={["column","column", "column","row"]} w="100%" border={"1px solid #999"} minH="50px" py="10px" px="10px">
        <Box w={["100%","100%","100%","50%"]}>  
            <Flex justify={"space-around"} pr="20px" pl="10px" wrap={"wrap"} rowGap="10px">
              <Box borderRight={"1px dotted #666"} textAlign={"center"} w={["50%","50%","20%","20%"]}  display={["none","none","none","block"]}>
                <Text  fontSize={"18px"} color="#444">Filter</Text>
              </Box>
              <Flex borderRight={"1px dotted #666"} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text fontSize={"18px"} >Active</Text> <BsCaretDownFill fontSize={"10px"}/>
              </Flex>
              <Flex borderRight={["none", "none", "1px dotted #666","1px dotted #666"]} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text fontSize={"18px"} >Client</Text> <BsCaretDownFill fontSize={"10px"}/>
              </Flex>
              <Flex borderRight={"1px dotted #666"} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text fontSize={"18px"} >Access</Text><BsCaretDownFill fontSize={"10px"}/> 
              </Flex>
              <Flex borderRight={["none", "none", "none","1px dotted #666"]} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                <Text fontSize={"18px"} >Billing</Text> <BsCaretDownFill fontSize={"10px"}/>
              </Flex>
            </Flex>
        </Box>

        <Box w={["98%","98%","98%","48%"]} >
            <Flex gap={"10px"} justify="space-between" >
             <Box w="80%">
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
