import { Box, Flex, Image, Text, Link, Button } from '@chakra-ui/react';
import React from 'react'






const NavbarHome = () => {
  return (
    <Box boxShadow={"md"}>
      <Flex align={"center"} px={"70px"} py={"20px"} justify={"space-between"} >
        <Flex  align={"center"} gap="25px">
          <Link href='/'><Image width={["150px"]} src="https://clockify.me/assets/images/clockify-logo.svg" alt='ImageNAvbar' /></Link>

          <Link _hover={{textDecoration:"none", color:"#03A9F4"}} textDecoration={"none"} href='/features'>
          <Text > FEATURES</Text>
          </Link>


          <Link _hover={{textDecoration:"none", color:"#03A9F4" }}  textDecoration={"none"} href='/downloads'>
          <Text> DOWNLOADS</Text>
          </Link>
            
         

        </Flex>




        <Flex align={"center"} gap="25px">
        <Link _hover={{textDecoration:"none", color:"#03A9F4"}}  textDecoration={"none"} href='/login'>
          <Text> LOGIN</Text>
          </Link>
            
          <Link _hover={{textDecoration:"none", }}  href='/signup'>
          {/* <Text colorScheme={"twitter"}  _hover={{bg:"#03A9F4", color:"#FFF"}} py={"10px"} px={"15px"} border={"1px solid black"}> SIGNUP FREE</Text> */}
          <Button colorScheme={"twitter"}>SIGN UP FREE</Button>
          </Link>

        </Flex>
      </Flex>

      
    </Box>
  )
}

export default NavbarHome