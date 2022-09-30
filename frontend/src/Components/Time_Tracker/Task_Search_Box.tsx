import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
type task={
    name:string;
    billable:boolean;
    startTime?:number;
    endTime:number;
    totalTime?:number;
    userId:string;
}
type tasksSearchProps={
    tasks:task[];
    handleSetValue:Function;
    setShow:Function;
}
const Task_Search_Box = ({handleSetValue,tasks,setShow}:tasksSearchProps) => {
    const handleSearch=(value:string)=>{
      handleSetValue(value)
      setShow(false)
    }
  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"absolute"} width={"100%"} bg="white" zIndex="1">
        {tasks.map((el)=>(
            <Box _hover={{bg:"#e4eaee"}} padding={"10px"} cursor={"pointer"} onClick={()=>handleSearch(el.name)} key={el.name}><Text fontSize={"sm"}>{el.name}</Text></Box>
        ))}
    </Box>
  )
}

export default Task_Search_Box