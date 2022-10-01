import {Box, Button, Flex, Stack} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import AppNavbar from '../Components/App_Bars/AppNavbar'
import { CompactAppSidebar, ExpandedAppSidebar } from '../Components/App_Bars/AppSidebar'
import { Filter } from '../Components/projects/Filter/Filter'
import { NewProjectModal } from '../Components/projects/NewProjectModal'
import { PageTitle } from '../Components/projects/PageTitle'
import { ProjectsList } from '../Components/projects/ProjectsList'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { addprojects, getProjects } from '../features/projects/projectsSlice'
import { addUser } from '../features/users/usersSlice'
 export const Projects = () => {
    const [showsidebar, setshowSidebar] =  useState<boolean>(false)
    const project = useAppSelector(store=>store.projectsSlice)
    const auth = useAppSelector(store=>store.authSlice)
    const dispatch = useAppDispatch()

    const toggleSidebar = ()=>{
        setshowSidebar(!showsidebar)
    }
    
    useEffect(()=>{
   
       dispatch(getProjects({token:auth.token, query:""}))
       console.log(project);
    
    },[])
    
  return (
    <Box>
        <AppNavbar Open={toggleSidebar}/>
        <Flex position={"relative"} width="100%" bg={"#F2F6F8"} justify={"space-between"} align={["top"]}>
        
        <Box>
                {showsidebar?<ExpandedAppSidebar />:<CompactAppSidebar />}
        </Box>  

        <Box width={["","",showsidebar?"85%":"80%", showsidebar?"85%":"95%"]} px={["20px"]} >
            <Flex justify={"space-between"} width="100%" align={["center"]} py={["25px","25px","25px","50px"]}>
                <PageTitle title='Projects'/>
                <Box >
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
