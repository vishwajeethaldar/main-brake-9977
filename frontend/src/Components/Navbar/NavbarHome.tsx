import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {BsXLg } from "react-icons/bs"
import {FaBars} from 'react-icons/fa'
import { Show, Hide } from '@chakra-ui/react'

const NavbarHome = () => {
  const [showSmNav, setShowSmNav] = useState(false)
  return (
    <Box w={"100%"} boxShadow={"md"} mx="auto">
      <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","70px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
        <Flex align={"center"} justify={"space-between"} w={["100%","100%","100%","10%"]}>
        <Link to='/'>
            <Image width={["150px"]} src="https://clockify.me/assets/images/clockify-logo.svg" alt='ImageNAvbar' />
        </Link>
        <Show breakpoint='(max-width: 991px)'>
            <Box _hover={{cursor:"pointer"}}>
              {showSmNav?
              <BsXLg onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>:
              <FaBars onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>
              }
            </Box>
        </Show>
        </Flex>
        <Flex  display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} align={"center"} direction={["column","column","column","row"]} gap="25px" width={["100%","100%","100%","35%"]}>
          <Link to='/features'>
          <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> FEATURES</Text>
          </Link>
          <Link  to='/downloads'>
          <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> DOWNLOADS</Text>
          </Link>
        </Flex>


        <Flex display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} justify={["center", "center", "center", "flex-end"]} align={"center"} gap="25px" direction={["column","column","column","row"]} width={["100%","100%","100%","55%"]}>
        <Link  to='/login'>
          <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> LOGIN</Text>
          </Link>
            {/* _hover={{textDecoration:"none", color:"#03A9F4"}}  textDecoration={"none"} */}
          <Link   to='/signup'>
          {/* <Text colorScheme={"twitter"}  _hover={{bg:"#03A9F4", color:"#FFF"}} py={"10px"} px={"15px"} border={"1px solid black"}> SIGNUP FREE</Text> */}
          <Button colorScheme={"twitter"}>SIGN UP FREE</Button>
          </Link>
        </Flex>
      </Flex>

      
    </Box>
  )
}

export default NavbarHome