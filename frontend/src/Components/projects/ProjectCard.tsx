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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { deleteProject, updateProject } from '../../features/projects/projectsSlice'
import { EditProjectCard } from './Filter/cards/EditProjectCard'

export const ProjectCard = ({project,bordertop,borderbottom}:{project:projectType,bordertop?:string,borderbottom?:string}) => {
  const { isOpen, onToggle,onOpen, onClose } = useDisclosure()
  
  const dispatch = useAppDispatch()
  const auth = useAppSelector(store=>store.authSlice)
  const [showcard, setShowcard] =  useState(false)
  const handleShowcard = () =>{
    setShowcard(showcard?false:true);
   }

   const handleDeleteProject = (id:string)=>{
    dispatch(deleteProject({token:auth.token, id:id}))
   }

   const handleUpdate = (val:projectType, id:string)=>{
      dispatch(updateProject({token:auth.token, id:id, data:val}))
   }
  return (
    <>
    <Flex  minH="40px" bg={"#fff"} display={["flex","flex","flex","none"]} justify={"space-between"} px="20px"  border="1px solid #ccc"  align={"center"}>
                    <Flex  align={"center"}>
                      <Checkbox  h="17px" name="access"  defaultChecked={false}></Checkbox> 
                      <Box  h={"10px"}  w="10px" bg={project.color} mx="10px" borderRadius={"50%"}></Box>
                      <Text fontSize={"18px"}>{project.name} </Text>
                    </Flex> 
                <Box _hover={{cursor:"pointer"}} onClick={()=>{
                       handleShowcard()
                    }}>
                      {!showcard?<BsFillArrowDownSquareFill color="#594" fontSize={"20px"}/>:<BsFillArrowUpSquareFill  fontSize={"20px"} color="#594"/>}
                </Box>
     </Flex>
    <Box display={[showcard?"block":"none",showcard?"block":"none",showcard?"block":"none","block"]}>
      <Flex  bg={project.archive?"#cec":"ccc"} px="20px" w="100%" justify={"space-between"} align="center">
         
          <Flex minH="35px" direction={"column"} gap="10px" w={["100%"]} display={[`${showcard}?flex:none`,`${showcard}?flex:none`,`${showcard}?flex:none`,"none"]}>
             <Flex>
                <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"6px"}  minW={["50%"]}> CLIENT</Box>
                <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["50%"]}> {project.client}</Box>
              </Flex> 
              
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> TRACKED</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["50%"]}> {project.tracked}</Box>
              </Flex>
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> AMOUNT</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["50%"]}> {project.amount}</Box>
              </Flex>
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> PROGRESS</Box>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["50%"]}> - </Box>
              </Flex>
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> ACCESS</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["50%"]}>{project.access?"Public":"Private"}</Box>
              </Flex>
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> FAVORITES</Box>
              <Flex onClick={()=>handleUpdate({...project,starred:!project.starred}, `${project._id}`)} borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["50%"]} _hover={{cursor:"pointer"}} justify="flex-end" pr="20px">
                <FaRegStar fontSize={"16px"} color={project.starred?"blue":"black"}/>
              </Flex>
              </Flex>
              <Flex>
              <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW="50%"> EDIT</Box>
               
                <Flex  justify="flex-end" pr="3px" w="50%" onClick={()=>onToggle()}>
                <Menu >
                <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
                
                  <BsThreeDotsVertical/>  
                
                </MenuButton>
                <MenuList >
                  <MenuItem onClick={()=>handleUpdate({...project, archive:!project.archive}, `${project._id}`)}>Archive</MenuItem>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem onClick={()=>handleDeleteProject(`${project._id}`)}>Delete</MenuItem>
                </MenuList>
              </Menu>
              </Flex>
              </Flex>
              
              
              
              
              
          </Flex>
          
          <Flex bg={project.archive?"#cec":"#fff"} display={["none","none","none","flex"]} direction={["column","column","column","row"]} minH="35px"  w={["100%"]} justify={"flex-start"} align={["flex-start","flex-start","flex-start","center"]} borderTop={["none","none","none",`${bordertop}`]} borderBottom={["none","none","none",`${borderbottom}`]} >
            <Checkbox display={["none","none","none","block"]} w="30px" name="access"  defaultChecked={false}></Checkbox> 
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} display={["none","none","none","block"]} h={"0px"} px={"10px"} w="0px" bg={project.color} mx="10px" borderRadius={"50%"}></Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} display={["none","none","none","block"]} minW="15%"> {project.name}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.client}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.tracked}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> {project.amount}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "14%"]}> - </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "14%"]}>{project.access?"Public":"Private"}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} textAlign={"right"} >
              <Flex onClick={()=>handleUpdate({...project,starred:!project.starred}, `${project._id}`)} align={"center"} justify="flex-end" pr="15px">
                <FaRegStar color={project.starred?"blue":"black"} fontSize={"16px"}/>
              </Flex>
            </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} alignSelf={["flex-end","flex-end","flex-end",""]}>
          <Menu>
          <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
              <Flex align={"center"} justify="flex-end" pr="15px">
                <Box onClick={()=>onToggle()}>
                    <BsThreeDotsVertical/>
                </Box>          
              </Flex>
              </MenuButton>
              <MenuList w="100px">
                <MenuItem onClick={()=>handleUpdate({...project, archive:!project.archive}, `${project._id}`)}>Archive</MenuItem>
                
                <MenuItem onClick={onOpen}>Edit</MenuItem>
                
                <MenuItem onClick={()=>handleDeleteProject(`${project._id}`)}>Delete</MenuItem>
              </MenuList>
          </Menu>

            </Box>
          </Flex>
          <Box>

          </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}  size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Edit Project</ModalHeader>
         
          <ModalBody  >
                <EditProjectCard onClose={onClose} project={project}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  </>
  )
}
