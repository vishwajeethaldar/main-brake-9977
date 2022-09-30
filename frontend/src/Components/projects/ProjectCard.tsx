import React,{useState} from 'react'
import {Flex,Box, Checkbox,Text} from "@chakra-ui/react"
import { projectType } from '../../features/types/types'
import {BsBorderBottom, BsThreeDotsVertical} from "react-icons/bs"
import {FaRegStar} from "react-icons/fa"
import {BsFillArrowDownSquareFill,BsFillArrowUpSquareFill} from 'react-icons/bs'
export const ProjectCard = ({project,bordertop,borderbottom}:{project:projectType,bordertop?:string,borderbottom?:string}) => {
  const [showcard, setShowcard] =  useState(false)
  const handleShowcard = () =>{
    setShowcard(showcard?false:true);
   }

  return (
    <>
    <Flex display={["flex","flex","flex","none"]} justify={"space-between"} px="20px" bg="#fff" border="1px solid #ccc"  align={"center"}>
                    <Flex  align={"center"}>
                      <Checkbox  h="17px" name="access"  defaultChecked={false}></Checkbox> 
                      <Box  h={"10px"}  w="10px" bg={project.color} mx="10px" borderRadius={"50%"}></Box>
                      <Text>{project.name} </Text>
                    </Flex> 
                    <Box onClick={()=>{
                       handleShowcard()
                    }}>
                      {!showcard?<BsFillArrowDownSquareFill color="#594"/>:<BsFillArrowUpSquareFill  color="#594"/>}
                </Box>
            </Flex>
    <Box display={[showcard?"block":"none",showcard?"block":"none",showcard?"block":"none","block"]}>
      <Flex  bg={["#eee","#eee","#eee","#fff"]} px="20px" w="100%" justify={"space-between"} align="center">
          <Flex minH="35px" direction={"column"} gap="10px" w={["50%","50%","50%","0%"]} display={[`${showcard}?flex:none`,`${showcard}?flex:none`,`${showcard}?flex:none`,"none"]}>
            {/* <Checkbox w="30px" name="access"  defaultChecked={false}></Checkbox> 
              <Box minW="15%"> NAME</Box> */}
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
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "15%"]}> {project.client}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "15%"]}> {project.tracked}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "15%"]}> {project.amount}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "15%"]}> - </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "15%"]}>{project.access?"Public":"Private"}</Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"}  minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} textAlign={"right"} >
              <Flex align={"center"} justify="flex-end" pr="15px">
                <FaRegStar fontSize={"16px"} />
              </Flex>
            </Box>
            <Box borderBottom={["1px solid #ccc","1px solid #ccc","1px solid #ccc","none"]} py={"10px"} minW={["100%","100%","100%", "50px"]} _hover={{cursor:"pointer"}} alignSelf={["flex-end","flex-end","flex-end",""]}>
              <Flex align={"center"} justify="flex-end" pr="15px">
              <BsThreeDotsVertical/>
                </Flex>
            </Box>
          </Flex>
          <Box>

          </Box>
      </Flex>
    </Box>
  </>
  )
}
