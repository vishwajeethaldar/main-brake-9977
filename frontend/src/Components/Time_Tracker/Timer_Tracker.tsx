import { Box } from '@chakra-ui/react'
import React,{useState} from 'react'
import Default from './Default'
import { Timer_dashboard } from './Timer_dashboard'

const Timer_Tracker = () => {
  const [show,setShow]=useState(false)
  return (
    <Box  minH={"100vh"}  bg={"#f2f6f8"} paddingLeft="30px" paddingRight={"30px"} paddingTop="50px" paddingBottom={"50px"}>
        <Timer_dashboard show={show} setShow={setShow}/>
        <Box onClick={()=>setShow(false)}>
        <Default/>
        </Box>
    </Box>
  )
}

export default Timer_Tracker