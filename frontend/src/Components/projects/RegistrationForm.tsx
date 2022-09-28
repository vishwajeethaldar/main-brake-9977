import {Box,Flex, Input, Button, InputRightAddon, InputGroup} from '@chakra-ui/react'
import {BsFillCaretDownFill} from "react-icons/bs"

export const RegistrationForm = () => {
  return (
    <Box>
        <Flex>
            <Input type="text" name="projectName" placeholder='Enter Project Name' />
                <InputGroup>     
                  <Input type='text' placeholder='Select client' disabled/>
                  <InputRightAddon  placeholder={"Select client"}   children={<BsFillCaretDownFill/>} bg="none"/>
                </InputGroup>
        </Flex>
        <Flex>
          
        </Flex>
    </Box>
  )
}
