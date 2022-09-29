import {Box,Flex,Checkbox, Stack,Input, Button,Text, InputRightAddon, InputGroup} from '@chakra-ui/react'
import { useState } from 'react'
import {BsFillCaretDownFill} from "react-icons/bs"
import {GoInfo} from "react-icons/go"
import { ColorPicker } from './ColorPicker'

export const RegistrationForm = () => {
  const [info, setInfo] = useState<boolean>(false)
  const [showColor,setShowColor ] = useState<boolean>(false)
  const [color, setColor] = useState<string>("#ffc107")
  const [MoreColors, setMoreColors] = useState<boolean>(false)
  return (
    <Stack >
        <Flex direction={["column","column","column","row"]} justify={"center"} gap={"15px"} align="center">
            <Input  width={["100%","100%","100%","50%"]} type="text" name="projectName" placeholder='Enter Project Name' />
            <InputGroup width={["100%","100%","100%","50%"]} border={"1px solid #ccc"} _hover={{bg:"#eee", cursor:"pointer"}}>     
              <Input type='text' placeholder='Select client' disabled _hover={{cursor:"pointer"}}/>
              <InputRightAddon    children={<BsFillCaretDownFill/>} bg="none" border={"none"}/>
            </InputGroup>
        </Flex>
        <Flex direction={["column","column","column","row"]} justify={"center"} gap={"15px"} align="center">
              <Flex width={["100%","100%","100%","50%"]} align="center" gap={"15px"}>
         
              <Box zIndex={"9999"}  w="45px" h="35px" border="1px solid #ccc" borderRadius={"5px"} position="relative" _hover={{cursor:"pointer"}} >
                <Box  position={"absolute"} top="10%" left="10%" bg={color} onClick={()=>setShowColor(showColor?false:true)} w="80%" h="80%" borderRadius={"5px"}>
                
                </Box>
                <Box zIndex={"9999"}  position={"absolute"} top="40px" display={showColor?"bloxk":"none"} bg="#fff" p="10px" border="1px solid #eee"> 
                    <ColorPicker setColor={setColor} setShowColor={setShowColor} color={color}/> 
                </Box>
              </Box>

                <Box>
                  <Flex align={"center"} gap={"10px"} justify="center">
                    <Checkbox defaultChecked>Public</Checkbox>
                    <Box onMouseOver={()=>setInfo(true)} onMouseOut={()=>setInfo(false)} position="relative">
                        <Text display={info?"block":"none"} position={"absolute"} top="20px" width="200px" textAlign={"center"} px="5px" fontSize="12px" border="1px solid #ccc">Visible to all workspace member</Text>
                        <GoInfo />
                    </Box>
                  </Flex>
                </Box>
              </Flex>

              <InputGroup width={["100%","100%","100%","50%"]} border={"1px solid #ccc"} _hover={{bg:"#eee", cursor:"pointer"}}>     
                <Input type='text' placeholder='No Template' disabled _hover={{cursor:"pointer"}}/>
                <InputRightAddon    children={<BsFillCaretDownFill/>} bg="none" border={"none"}/>
              </InputGroup>
        </Flex>
    </Stack>
  )
}

