import React,{useState,ChangeEvent,useRef, useEffect} from 'react'
import { Box, Flex, Input ,Button, Text} from '@chakra-ui/react'
import {GrAddCircle} from "react-icons/gr"
import {AiFillTag} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"
import {IoEllipsisVertical} from "react-icons/io5"
import Create_Project from './Create_Project'
import Task_Search_Box from './Task_Search_Box'
import CounterApp from './CounterApp'
import useCounter from '../../hooks/useCounter'
import {task} from "./Task_Search_Box"
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { addTask, getTasks, updateTask } from '../../features/tasks/tasksSlice'
import { getProjects } from '../../features/projects/projectsSlice'
import ProjectName from './ProjectName'
type trackerProps={
  show:boolean;
  setShow:Function;
  handleProps:Function;
  updatedTask:task;
}
let init={
   etime:"",
   stime:"",
}
export const Timer_dashboard = ({show,setShow,handleProps,updatedTask}:trackerProps) => {
  const token= useAppSelector(store=>store.authSlice.token)
  const projects= useAppSelector(store=>store.projectsSlice)
  const [viewProject,setViewProject]=useState<boolean>(false)
  const [userid, email, p] = token.trim().split(":")
  const dispatch= useAppDispatch()
  const [type,setType]=useState<boolean>(true)
  const [taskName,setTaskName]=useState<string>("")
  const [billable,setBillable]=useState(false)
  const {timeString,count,handleStart,handleStop}=useCounter(0)
  const tasks=useAppSelector((store)=>store.tasksSlice.tasks)
  const [projectName,setProjectName]=useState<string>("")
  const ref=useRef<any>(null)
  const [update,setUpdate]=useState<boolean>(false)
  useEffect(()=>{
     handleProps(setType,handleStart,setUpdate)
   //   dispatch(getProjects({token:token, query:""}))
  },[])
 
  const onClick=()=>{
     if(type)
     {
        setType(false)
        console.log(update,"hey")
        !update? ref.current.value=taskName:ref.current.value=updatedTask.name
        handleStart()
        let hours=new Date().getHours()
        let minutes=new Date().getMinutes()
        let time=`${hours}:${minutes}`
        init.stime=time
     }
     else
     {
        setType(true)
        handleStop()
        setViewProject(false)
        let hours=new Date().getHours()
        let minutes=new Date().getMinutes()
        let time=`${hours}:${minutes}`
        init.etime=time
        ref.current.value=""
        let data ={name:taskName,billable:billable,endTime:count,userId:userid,sTime:init.stime,eTime:init.etime,projectName:projectName}
        if(!update)
        {
         dispatch(addTask({token:token, data:data}))
        }
        else
        {
          setUpdate(false)
          dispatch(updateTask({data:{...updatedTask,endTime:updatedTask.endTime+count,eTime:init.etime},token:token}))
        }
     }
  }
  const handleSetValue=(value:string)=>{
     ref.current.value=value
  }
  const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
     setTaskName(ref.current.value)
     setShow(true)
     getTasks({token:token,query:event.target.value})
  }
  const handleBillable=()=>{
    setBillable(!billable)
  }
  const handleProjectName=(name:string)=>{
     setProjectName(name)
  }
  return (
    <Box position={"sticky"} zIndex="3px" top={"50px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} bg={"rgb(255,255,255)"} padding="20px" display={"flex"} flexDirection="column" gap={"15px"}>
        <Flex>
            <Box width={"90%"} position="relative">
            <Input ref={ref} onChange={onChange} placeholder='What are you working on?'/>
            {show&&tasks? <Task_Search_Box handleSetValue={handleSetValue} setShow={setShow} tasks={tasks}/>:null}
            </Box>
            {viewProject? <ProjectName name={projectName}/>:<Create_Project handleProjectName={handleProjectName} setViewProject={setViewProject} />}
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
