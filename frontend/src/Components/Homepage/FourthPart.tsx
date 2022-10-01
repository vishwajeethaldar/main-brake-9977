import React from 'react'
import { Flex, Text } from "@chakra-ui/react"
import { SECOND_PAGE_H1, SECOND_PAGE_H2 } from './Homepagecss'

const FourthPart = () => {
  return (
 
    <div>
        


        <Flex marginTop={"90px"} align={"center"} gap={"15px"} direction={"column"}>
        <Text fontSize={"2.5em"}>Time management features</Text>
        <Text textAlign={"center"} fontSize={"1.16em"} width={["35%"]}>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</Text>
      </Flex>
    </div>
  )
}

export default FourthPart