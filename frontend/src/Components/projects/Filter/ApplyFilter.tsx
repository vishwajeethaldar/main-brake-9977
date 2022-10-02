import { Button } from "@chakra-ui/react"


export const ApplyFilter = ({handleSearch}:{handleSearch:Function}) => {


  return (
    <Button onClick={()=>{handleSearch(); }} variant="outline" colorScheme={"twitter"} fontSize={["14px","14px","14px","16px"]} px="10px" py="10px">APPLY FILTER</Button>
  )
}
