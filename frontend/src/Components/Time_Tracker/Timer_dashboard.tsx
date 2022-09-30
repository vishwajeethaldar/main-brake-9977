import React,{useState,ChangeEvent,useRef} from 'react'
import { Box, Flex, Input ,Button, Text} from '@chakra-ui/react'
import {GrAddCircle} from "react-icons/gr"
import {AiFillTag} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"
import {IoEllipsisVertical,IoAddCircleSharp} from "react-icons/io5"
import Create_Project from './Create_Project'
import Task_Search_Box from './Task_Search_Box'
import CounterApp from './CounterApp'
import useCounter from '../../hooks/useCounter'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/user'
import { addTask, getTasks } from '../../store/tasks/tasks_actions'
type trackerProps={
  show:boolean;
  setShow:Function;
}
export const Timer_dashboard = ({show,setShow}:trackerProps) => {
  
  const dispatch=useAppDispatch()
  const [type,setType]=useState<boolean>(true)
  const [taskName,setTaskName]=useState<string>("")
  const [billable,setBillable]=useState(false)
  const {timeString,count,handleStart,handleStop}=useCounter(0)
  const tasks=useSelector((store)=>store.tasks.tasks)
  const ref=useRef<any>(null)
  const onClick=()=>{
     if(type)
     {
        setType(false)
        handleStart()
     }
     else
     {
        setType(true)
        handleStop()
        dispatch(addTask({name:taskName,billable:billable,endTime:count,userId:"6333f6b05df0b3cce904692c"}))
     }
  }
  const handleSetValue=(value:string)=>{
     ref.current.value=value
  }
  const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
     setTaskName(event.target.value)
     setShow(true)
     dispatch(getTasks(event.target.value))
  }
  const handleBillable=()=>{
    setBillable(!billable)
  }
  return (
    <Box position={"sticky"} zIndex="3px" top={"50px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} bg={"rgb(255,255,255)"} padding="20px" display={"flex"} flexDirection="column" gap={"15px"}>
        <Flex>
            <Box width={"90%"} position="relative">
            <Input ref={ref} onChange={onChange} placeholder='What are you working on?'/>
            {show&&tasks? <Task_Search_Box handleSetValue={handleSetValue} setShow={setShow} tasks={tasks}/>:null}
            </Box>
            <Create_Project/>
        </Flex>
        <Flex alignItems={"center"} justifyContent="space-between">
            <Flex justifyContent="space-between" width={"40%"}>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><AiFillTag color='grey' fontSize={"30px"}/></Button>
            <Button onClick={handleBillable} bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><BsCurrencyDollar color={billable? "#03a9f4":"grey"} fontSize={"30px"}/></Button>
            </Flex>
            <Flex justifyContent="space-between" width={"25%"} alignItems={"center"}>
            <Box><CounterApp timeString={timeString}/></Box>
            <Button size={"sm"} onClick={onClick} bg={type? "#03a9f4":"red"} _active={{bg:"#038fce"}} _hover={{bg:type?"#038fce":"#faa29c"}}><Text fontSize={"xs"} color={"white"}>{type? "START":"STOP"}</Text></Button>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><IoEllipsisVertical fontSize={"30px"} color="grey"/></Button>
            </Flex>
        </Flex>
    </Box>
  )
}
