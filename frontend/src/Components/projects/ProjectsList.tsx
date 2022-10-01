import {useEffect,useState} from "react"
import {Box, Flex, Table, Text,Checkbox} from "@chakra-ui/react"
import { projectType } from "../../features/types/types"
import { ProjectCard } from "./ProjectCard";
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { getProjects } from "../../features/projects/projectsSlice";
import {BsFillArrowDownSquareFill,BsFillArrowUpSquareFill} from 'react-icons/bs'
export const ProjectsList = ({projects}:{projects:projectType[]}) => {

  // const project = useAppSelector(store=>store.projectsSlice)
  // const auth = useAppSelector(store=>store.authSlice)
  
  // const dispatch = useAppDispatch()

  // useEffect(()=>{
  //   dispatch(getProjects({token:auth.token}))
  // },[])
  
 
  return (
    <Box bg="#FFF"  border={"1px solid #ccc"} mt="50px">
       
       {/* <Table>
          <Thead>
              <Tr> 
                <Th> </Th>
              </Tr>
          </Thead>
       </Table> */}
       
        <Box bg="#ded"  px="20px" py="10px">
            <Text fontSize={["20px"]}>
                Projects
            </Text>
        </Box>

        <Flex minH="50px"  w="100%" justify={"space-between"} align="center" bg="#fff">
           <Flex px="20px" display={["none","none","none","flex"]} minH="35px" w={["90%"]} justify={"flex-start"} align="center">
          <Checkbox w="30px" name="access"  defaultChecked={false}></Checkbox> 
            <Box minW="19%"> NAME</Box>
            <Box minW="15%"> CLIENT</Box>
            <Box minW="15%"> TRACKED</Box>
            <Box minW="15%"> AMOUNT</Box>
            <Box minW="15%"> PROGRESS</Box>
            <Box minW="15%"> ACCESS</Box>
          </Flex>

          <Box>

          </Box>
        </Flex>
        
          <Box>
            {projects.map((project,i)=>{            
              return (
                <Box key={`${project._id} ${Date.now()}`} w="100%" >
                        <ProjectCard project={project} bordertop={i===0?"1px solid #ccc":"none"} borderbottom={i>=0 && i<projects.length-1?"1px solid #ccc":"none"} />
            </Box>
              )
            })}
          </Box>
    </Box>
  )
}
