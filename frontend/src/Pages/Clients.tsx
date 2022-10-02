import React, { useState } from 'react'
import {ClientsComponent} from '../Components/clients/ClientsComponent'
import AppNavbar from '../Components/App_Bars/AppNavbar'
import CompactAppSidebar, { ExpandedAppSidebar } from '../Components/App_Bars/AppSidebar'
import { Box, Flex, Image} from '@chakra-ui/react'
import { useAppSelector } from '../features/hooks'
import loader from '/Curve-Loading.gif'
const Clients = () => {
  const clients = useAppSelector(store=>store.clientSlice)
  const [showsidebar, setshowSidebar] =  useState(false);
  const toggleSidebar = ()=>{
    setshowSidebar(!showsidebar)
}
  return (
    <div>
      <AppNavbar Open={toggleSidebar}/>
      <Flex position={"relative"} width="100%" bg={"#F2F6F8"} justify={"space-between"} align={["top"]}>
        
        <Box>
                {showsidebar?<ExpandedAppSidebar />:<CompactAppSidebar />}
        </Box>
      <Box width={showsidebar?"89%":"96%"} >

          <ClientsComponent />

        </Box>
          
        </Flex>
        {clients.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image src={loader} />
      </Flex>:null}
    </div>
  )
}

export default Clients