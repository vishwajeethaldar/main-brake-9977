import {Box, Button, Flex,Text, Stack, useDisclosure} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppNavbar from '../Components/App_Bars/AppNavbar'
import CompactAppSidebar,{ ExpandedAppSidebar } from '../Components/App_Bars/AppSidebar'
import { Filter } from '../Components/projects/Filter/Filter'
import { NewProjectModal } from '../Components/projects/NewProjectModal'
import { PageTitle } from '../Components/projects/PageTitle'
import { ProjectsList } from '../Components/projects/ProjectsList'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { addprojects, getProjects } from '../features/projects/projectsSlice'
import { addUser } from '../features/users/usersSlice'

 export const Projects = () => {
    const [showsidebar, setshowSidebar] =  useState<boolean>(false)
    const [showsidebar2, setshowSidebar2] =  useState<boolean>(false)
    const project = useAppSelector(store=>store.projectsSlice)
    const auth = useAppSelector(store=>store.authSlice)
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()



    const toggleSidebar = ()=>{
        setshowSidebar(!showsidebar)
        onOpen()
    }
    
    useEffect(()=>{
       dispatch(getProjects({token:auth.token, query:""}))
       console.log(project);
    },[])
    
  return (
    <Box maxH={"100vh"} >
        <Box>
        <AppNavbar Open={toggleSidebar}/>
        </Box>
        <Flex position={"relative"} width="100%" bg={"#F2F6F8"} justify={"space-between"} align={["top"]}>
        
        <Box>
            <Box display={["none","none","none","block"]}>
                {showsidebar?<ExpandedAppSidebar />:<CompactAppSidebar />}
            </Box>
            <Box display={["block","block","block","none"]} borderRight="1px solid #bdbdbd" position={"absolute"} top="0px" bg="#fff" zIndex={"10"} minH="100%">
                {showsidebar2||showsidebar?<ExpandedAppSidebar />:null}
            </Box>
        </Box>  
        

        <Box onClick={()=>setshowSidebar2(false)} width={["100%","100%",showsidebar?"100%":"100%", showsidebar?"85%":"95%"]} px={["20px"]} >
            <Flex justify={"space-between"} width="100%" align={["center"]} py={["25px","25px","25px","50px"]}>
                <PageTitle title='Projects'/>
                <Box>
                    <NewProjectModal/>
                </Box>
            </Flex>
            <Filter/>

            <Box>
                <ProjectsList projects={project.products}/>
            </Box>
        </Box>
      
        
    </Flex>
    </Box>
  )
}
