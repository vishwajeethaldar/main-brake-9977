
import { Box,Flex, Text } from "@chakra-ui/react"


const FourthPart = () => {
  return (
 
    <Box w={"90vw"} mx="auto">
        
     <Flex justify={"center"} marginTop={"90px"} align={"center"}  gap={"15px"} direction={"column"}>
        <Text textAlign={"center"} fontSize={["1.7em","1.7em","2.5em","2.5em"]}>Time management features</Text>
        <Text textAlign={"center"} fontSize={"1.16em"} width={["96%","96%","65%","45%"]}>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</Text>
      </Flex>
    </Box>
  )
}

export default FourthPart