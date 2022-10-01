import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import {BsSearch} from 'react-icons/bs'
import { filterQueryType } from "./Filter"
export const Search = ({setFilterQuery,filterQuery}:{filterQuery:filterQueryType, setFilterQuery:Function}) => {
  return (
    <Box w="100%" >
        <InputGroup>
        <InputLeftAddon children={<BsSearch/>}/>
        <Input onChange={(e)=>setFilterQuery({...filterQuery, name:e.target.value})} type="search" name="searchProject" placeholder="Project Name"/>
        </InputGroup>
    </Box>
  )
} 
