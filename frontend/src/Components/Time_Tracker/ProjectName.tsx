import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsDot} from "react-icons/bs"
type ProjectNameProps={
    name:string
}
const ProjectName = ({name}:ProjectNameProps) => {
  return (
    <Flex alignItems={"center"}>
      <BsDot color='grey' fontSize={"35px"}/>
      <Text color={"grey"} fontSize={"sm"}>{name}</Text>
    </Flex>
  )
}

export default ProjectName