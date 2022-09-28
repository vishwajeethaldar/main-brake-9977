import {Box, Flex} from '@chakra-ui/react'
import { NewProjectModal } from '../Components/projects/NewProjectModal'
import { PageTitle } from '../Components/projects/PageTitle'
 export const Projects = () => {
  return (
    <Flex width="100%" bg={"#F2F6F8"} justify={"space-between"} align={["center"]}>
        <Box width={"20%"} display={["none", "none", "none", "block"]}>

        </Box>  

        <Box  width={["100%", "100%", "100%","80%"]} px={["20px"]} >
            <Flex justify={"space-between"} width="100%" align={["center"]} py={["25px","25px","25px","50px"]}>
                <PageTitle title='Projects'/>
                <NewProjectModal/>
            </Flex>
        </Box>

        
    </Flex>
  )
}
