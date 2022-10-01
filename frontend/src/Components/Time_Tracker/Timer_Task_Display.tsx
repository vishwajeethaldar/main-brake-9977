import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {FaRegEdit} from "react-icons/fa"
import {AiFillTag} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"
import {task} from "./Task_Search_Box"
import {GoCalendar} from "react-icons/go"
import {BsFillPlayFill} from "react-icons/bs"
import {IoEllipsisVertical} from "react-icons/io5"
import {TimeString} from "./TimeConverter"
import Delete_Task from './Delete_Task'
type tasksDisplayProps={
    tasks:task[];
    setType:Function;
    handleStart:Function;
    handleUpdateId:Function;
    setUpdate:Function;
    total:number;
}
const Timer_Task_Display = ({tasks,setType,handleStart,handleUpdateId,setUpdate,total}:tasksDisplayProps) => {
  const onClick=(el:task)=>{
    handleUpdateId(el)
    setUpdate(true)
    setType(false)
    handleStart()
  }
  console.log(total)
  return (
    <Box mt={"10px"}>
        <Flex justifyContent={"space-between"}>
            <Text fontWeight={"400"} fontSize={"sm"}>This week</Text>
            <Text fontWeight={"400"} fontSize={"sm"}>Week total: {TimeString(total)}</Text>
        </Flex>
        <Box mt={"30px"}>
            <Flex justifyContent={"space-between"} bg="#e4eaee" padding={"10px"} border="1px solid #ababab">
                <Text color={"grey"} fontSize={"sm"} width={"10%"}>Today</Text>
                <Flex justifyContent={"space-between"} width={"12%"} textAlign="center">
                    <Text color={"grey"} fontSize={"sm"}>Total:</Text>
                    <Text fontWeight={"500"} fontSize={"sm"}>{TimeString(total)}</Text>
                    <FaRegEdit fontSize="20px" color="grey"/>
                </Flex>
            </Flex>
            {tasks.map((el)=>{
                return(
                    <Flex key={el.name} justifyContent={"space-between"} padding="10px" bg={"white"} border="1px solid #ababab" borderTop={"none"}>
                        <Flex justifyContent={"space-between"}  width={"20%"} alignItems="center" >
                            <Text fontSize={"sm"}>{el.name}</Text>
                            <Text fontSize={"sm"}>{el.projectName}</Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}   width={"50%"}>
                        <Flex alignItems={"center"} justifyContent={"space-between"}   width={"10%"}>
                            <AiFillTag color='grey'/>
                            <BsCurrencyDollar cursor={"pointer"} color={el.billable? "#03a9f4":"grey"}/>
                        </Flex>
                        <Flex justifyContent={"space-between"} alignItems="center"  width={"10%"}>
                            <Text fontSize={"sm"}>{el.sTime}</Text>
                            <Text fontSize={"sm"}>-</Text>
                            <Text fontSize={"sm"}>{el.eTime}</Text>
                        </Flex>
                        <Flex alignItems={"center"} justifyContent={"space-between"}   width={"30%"}>
                        <GoCalendar cursor={"pointer"}/>
                        <Text fontSize={"sm"} fontWeight="bold">{TimeString(el.endTime)}</Text>
                        <BsFillPlayFill onClick={()=>onClick(el)} cursor={"pointer"} color='grey'/>
                        <Delete_Task id={el._id}/>
                        </Flex>
                        </Flex>
                    </Flex>
                )
            })}
        </Box>
    </Box>
  )
}

export default Timer_Task_Display