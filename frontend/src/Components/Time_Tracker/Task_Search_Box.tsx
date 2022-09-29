import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
type task={
    name:string;
    billable:boolean;
    startTime?:number;
    endTime:number;
    totalTime:number;
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
    <Box position={"absolute"} border="1px solid red" width={"100%"} bg="white" zIndex="1">
        {tasks.map((el)=>(
            <Box cursor={"pointer"} onClick={()=>handleSearch(el.name)} key={el.userId}>{el.name}</Box>
        ))}
    </Box>
  )
}

export default Task_Search_Box