import React from 'react'
import { Box, Flex, Input ,Button, Text} from '@chakra-ui/react'
import {GrAddCircle} from "react-icons/gr"
import {AiFillTag} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"
import {IoEllipsisVertical,IoAddCircleSharp} from "react-icons/io5"
export const Timer_dashboard = () => {
  return (
    <Box bg={"rgb(255,255,255)"} padding="20px" display={"flex"} flexDirection="column" gap={"15px"}>
        <Flex>
            <Input placeholder='What are you working on?'/>
            <Button bg={"none"} _active={"none"} _hover={"none"} gap={"10px"}><IoAddCircleSharp color='#03a9f4' fontSize={"30px"}/><Text color={"#03a9f4"}>Project</Text></Button>
        </Flex>
        <Flex>
            <Button><AiFillTag/></Button>
            <Button><BsCurrencyDollar/></Button>
            <Box><Text>00:00:00</Text></Box>
            <Button><Text>START</Text></Button>
            <Button><IoEllipsisVertical/></Button>
        </Flex>
    </Box>
  )
}
