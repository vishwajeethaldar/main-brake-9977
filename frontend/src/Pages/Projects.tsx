import {Box, Button, Flex} from '@chakra-ui/react'
import { useEffect } from 'react'
import { Filter } from '../Components/projects/Filter/Filter'
import { NewProjectModal } from '../Components/projects/NewProjectModal'
import { PageTitle } from '../Components/projects/PageTitle'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { addprojects, getProjects } from '../features/projects/projectsSlice'
import { addUser } from '../features/users/usersSlice'
 export const Projects = () => {
    const project = useAppSelector(store=>store.projectsSlice)
    const auth = useAppSelector(store=>store.usersSlice)
    const dispatch = useAppDispatch()
    console.log(auth.token);
    
    useEffect(()=>{
        // if(auth.token){
        //     dispatch(getProjects({token:auth.token}))
        // }   
    },[])
    
  return (
    <Flex width="100%" bg={"#F2F6F8"} justify={"space-between"} align={["center"]}>
        {/* <Box width={"20%"} display={["none", "none", "none", "block"]}>

        </Box>   */}

        <Box  width={["100%", "100%", "100%","100%"]} px={["20px"]} >
            <Flex justify={"space-between"} width="100%" align={["center"]} py={["25px","25px","25px","50px"]}>
                <PageTitle title='Projects'/>
                <Box >
                    <NewProjectModal/>
                </Box>
            </Flex>
            <Filter/>
        </Box>

        
    </Flex>
  )
}
