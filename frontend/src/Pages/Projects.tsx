import {Box, Flex} from '@chakra-ui/react'
import { CreateProjectButton } from '../Components/projects/CreateProjectButton'
import { PageTitle } from '../Components/projects/PageTitle'
 export const Projects = () => {
  return (
    <Flex width="100%">
        <Box>

        </Box>  
        <Box bg={"#F2F6F8"} width="100%">
            <Flex justify={"space-between"} width="100%">
                <PageTitle title='Projects'/>
                <CreateProjectButton/>
            </Flex>
        </Box>

        
    </Flex>
  )
}
