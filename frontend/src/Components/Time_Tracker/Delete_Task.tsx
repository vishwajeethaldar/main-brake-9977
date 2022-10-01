import { Button, Menu, MenuButton, MenuItem, MenuList, Text, Skeleton } from '@chakra-ui/react'
import React from 'react'
import {IoEllipsisVertical} from "react-icons/io5"
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { deleteTask } from '../../features/tasks/tasksSlice';
type deleteTaskProp={
    id?:string;
}
const Delete_Task = ({id}:deleteTaskProp) => {
    const token=useAppSelector((store)=>store.authSlice.token)
    const {loading}=useAppSelector((store)=>store.tasksSlice)
    // console.log(loading)
    const dispatch=useAppDispatch()
    const handleDelete=(t:any)=>{
        dispatch(deleteTask({token:token,id:t}))
    }
    // if(loading)
    // {
    //     return <Skeleton height={"20px"}/>
    // }
  return (
    <Menu>
  <MenuButton width={"2px"} _hover={{bg:"none"}} _active={{bg:"none"}} bg={"none"} as={Button} rightIcon={<IoEllipsisVertical color='grey'/>}></MenuButton>
  <MenuList width={"0.2"}>
    <MenuItem><Text fontSize={"sm"}>Duplicate</Text></MenuItem>
    <MenuItem onClick={()=>handleDelete(id)}><Text fontSize={"sm"}>Delete</Text></MenuItem>
  </MenuList>
</Menu>
  )
}

export default Delete_Task