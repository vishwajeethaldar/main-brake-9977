import React,{useState} from 'react'
import {Flex,Box, Checkbox,Text, useDisclosure} from "@chakra-ui/react"
import { projectType } from '../../features/types/types'
import {BsBorderBottom, BsThreeDotsVertical} from "react-icons/bs"
import {FaRegStar} from "react-icons/fa"
import {BsFillArrowDownSquareFill,BsFillArrowUpSquareFill} from 'react-icons/bs'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { deleteProject } from '../../features/projects/projectsSlice'

export const ProjectCard = ({project,bordertop,borderbottom}:{project:projectType,bordertop?:string,borderbottom?:string}) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(store=>store.authSlice)
  const [showcard, setShowcard] =  useState(false)
  const handleShowcard = () =>{
    setShowcard(showcard?false:true);
   }

   const handleDeleteProject = (id:string)=>{
    dispatch(deleteProject({token:auth.token, id:id}))
   }

  return (
    <>
    <Flex display={["flex","flex","flex","none"]} justify={"space-between"} px="20px" bg="#fff" border="1px solid #ccc"  align={"center"}>
                    <Flex  align={"center"}>
                      <Checkbox  h="17px" name="access"  defaultChecked={false}></Checkbox> 
                      <Box  h={"10px"}  w="10px" bg={project.color} mx="10px" borderRadius={"50%"}></Box>
                      <Text>{project.name} </Text>
                    </Flex> 
                <Box _hover={{cursor:"pointer"}} onClick={()=>{
                       handleShowcard()
                    }}>
                      {!showcard?<BsFillArrowDownSquareFill color="#594"/>:<BsFillArrowUpSquareFill  color="#594"/>}
                </Box>
            </Flex>
    <Box display={[showcard?"block":"none",showcard?"block":"none",showcard?"block":"none","block"]}>
      <Flex  bg={["#eee","#eee","#eee","#fff"]} px="20px" w="100%" justify={"space-between"} align="center">
          <Flex minH="35px" direction={"column"} gap="10px" w={["50%","50%","50%","0%"]} display={[`${showcard}?flex:none`,`${showcard}?flex:none`,`${showcard}?flex:none`,"none"]}>
             <Checkbox w="30px" name="access"  defaultChecked={false}></Checkbox> 
              <Box minW="15%"> NAME</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"6px"}  minW="15%"> CLIENT</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> TRACKED</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> AMOUNT</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> PROGRESS</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> ACCESS</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> FAVORITES</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="15%"> EDIT</Box>
          </Flex>
          
          <Flex direction={["column","column","column","row"]} minH="35px"  w={["50%","50%","50%","100%"]} justify={"flex-start"} align={["flex-start","flex-start","flex-start","center"]} borderTop={["none","none","none",`${bordertop}`]} borderBottom={["none","none","none",`${borderbottom}`]} >
            <Checkbox display={["none","none","none","block"]} w="30px" name="access"  defaultChecked={false}></Checkbox> 
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} display={["none","none","none","block"]} h={"0px"} px={"10px"} w="0px" bg={project.color} mx="10px" borderRadius={"50%"}></Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} display={["none","none","none","block"]} minW="15%"> {project.name}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.client}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.tracked}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.amount}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> - </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "14%"]}>{project.access?"Public":"Private"}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} textAlign={"right"} >
              <Flex align={"center"} justify="flex-end" pr="15px">
                <FaRegStar fontSize={"16px"} />
              </Flex>
            </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} alignSelf={["flex-end","flex-end","flex-end",""]}>
          <Menu>
          <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} >
              <Flex align={"center"} justify="flex-end" pr="15px">
                <Box onClick={()=>onToggle()}>
                    <BsThreeDotsVertical/>
                </Box>          
              </Flex>
              </MenuButton>
              <MenuList w="100px">
                <MenuItem>Archive</MenuItem>
                <MenuItem>Edit</MenuItem>
                <MenuItem onClick={()=>handleDeleteProject(`${project._id}`)}>Delete</MenuItem>
              </MenuList>
          </Menu>


            </Box>
          </Flex>
          <Box>

          </Box>
      </Flex>
    </Box>
  </>
  )
}
