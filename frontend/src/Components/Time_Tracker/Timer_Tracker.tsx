import { Box } from '@chakra-ui/react'
import React from 'react'
import Default from './Default'
import { Timer_dashboard } from './Timer_dashboard'

const Timer_Tracker = () => {
  return (
    <Box minH={"100vh"}  bg={"#f2f6f8"} paddingLeft="30px" paddingRight={"30px"} paddingTop="50px" paddingBottom={"50px"}>
        <Timer_dashboard/>
        <Default/>
    </Box>
  )
}

export default Timer_Tracker