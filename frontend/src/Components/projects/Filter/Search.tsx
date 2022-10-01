import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import {BsSearch} from 'react-icons/bs'
export const Search = () => {
  return (
    <Box w="100%" >
        <InputGroup>
        <InputLeftAddon children={<BsSearch/>}/>
        <Input type="search" name="searchProject" placeholder="Project Name"/>
        </InputGroup>
    </Box>
  )
} 
