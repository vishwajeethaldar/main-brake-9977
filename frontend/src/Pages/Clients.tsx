import React, { useState } from 'react'
import ClientsComponent from '../Components/clients/ClientsComponent'
import AppNavbar from '../Components/App_Bars/AppNavbar'
import { CompactAppSidebar, ExpandedAppSidebar } from '../Components/App_Bars/AppSidebar'
import { Box, Flex } from '@chakra-ui/react'

const Clients = () => {
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
    </div>
  )
}

export default Clients