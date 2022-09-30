import {Box,Flex,Checkbox, Stack,Input, Button,Text, InputRightAddon, InputGroup} from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import {BsFillCaretDownFill} from "react-icons/bs"
import {GoInfo} from "react-icons/go"
import { useAppSelector,useAppDispatch } from '../../features/hooks'
import { addprojects } from '../../features/projects/projectsSlice'
import { AddClient } from './AddClient'
import AddTemplates from './AddTemplates'
import { ColorPicker } from './ColorPicker'

export const RegistrationForm = ({onClose}:{onClose:Function}) => {
  const auth = useAppSelector(store=>store.authSlice)
  const [info, setInfo] = useState<boolean>(false)
  const [showColor,setShowColor ] = useState<boolean>(false)
  const [color, setColor] = useState<string>("#ffc107")
  const [MoreColors, setMoreColors] = useState<boolean>(false)
  const [showClient, setShowClient] = useState<boolean>(false)
  const [showTemplate, setShowTemplate] = useState<boolean>(false)
  const [projectProp, setProjectProp] =  useState({name:"", color:"", userId:"",client:"", template:"", access:true})
  
  let [userid,e,p] = auth.token.trim().split(":")
  // custom dispatch, selector Hook
  const project = useAppSelector(store=>store.projectsSlice)
  const dispatch = useAppDispatch()
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      let {name, value} = e.target;
      if(name==="access"){
        setProjectProp({...projectProp, [name]:e.target.checked});  
      }else{
        setProjectProp({...projectProp, [name]:value})  
      } 
  }

 

  const hanldeLogin = ()=>{
      dispatch(addprojects({token:auth.token, data:{name:projectProp.name, userId:userid,color:color}}))
  }
  useEffect(()=>{
    setProjectProp({...projectProp, color:color, userId:userid}) 
  },[color])

  return (
    <Stack position={"relative"} >
        <Flex direction={["column","column","column","row"]} justify={"center"} gap={"15px"} align="center">
            <Input  width={["100%","100%","100%","50%"]} type="text" name="name" value={projectProp.name} onChange={(e)=>handleChange(e)} placeholder='Enter Project Name' />
            <InputGroup width={["100%","100%","100%","50%"]} border={"1px solid #ccc"} _hover={{bg:"#eee", cursor:"pointer"}} onClick={()=>{
              setShowClient(showClient?false:true)
              setShowTemplate(false)
            }}>     
              <Input type='text' name={"client"} placeholder='Select client' disabled _hover={{cursor:"pointer"}}/>
              <InputRightAddon    children={<BsFillCaretDownFill/>} bg="none" border={"none"}/>
            </InputGroup>
        </Flex>
        <Box display={showClient?"block":"none"} position={"absolute"}  left={["0%","0%","0%","51.5%"]} top={["33%","33%","33%","21%"]} minW={["100%","100%","100%","70%"]} border={"1px solid #ddd"} bg="#fff" zIndex="9999">
            <AddClient handleChange={handleChange}/>
        </Box>

        <Flex direction={["column","column","column","row"]} justify={"center"} gap={"15px"} align="center" >
              <Flex width={["100%","100%","100%","50%"]} align="center" gap={"15px"}>
         
              <Box zIndex={"999"}  w="45px" h="35px" border="1px solid #ccc" borderRadius={"5px"} position="relative" _hover={{cursor:"pointer"}} >
                <Box  position={"absolute"} top="10%" left="10%" bg={color} onClick={()=>setShowColor(showColor?false:true)} w="80%" h="80%" borderRadius={"5px"}>
                
                </Box>
                <Box zIndex={"998"}  position={"absolute"} top="40px" display={showColor?"bloxk":"none"} bg="#fff" p="10px" border="1px solid #eee"> 
                    <ColorPicker setColor={setColor} setShowColor={setShowColor} color={color}/> 
                </Box>
              </Box>

                <Box>
                  <Flex align={"center"} gap={"10px"} justify="center">
                    <Checkbox name="access" onChange={(e)=>handleChange(e)} defaultChecked>Public</Checkbox>
                    <Box onMouseOver={()=>setInfo(true)} onMouseOut={()=>setInfo(false)} position="relative">
                        <Text display={info?"block":"none"} position={"absolute"} top="20px" width="200px" textAlign={"center"} px="5px" fontSize="12px" border="1px solid #ccc">Visible to all workspace member</Text>
                        <GoInfo />
                    </Box>
                  </Flex>
                </Box>
              </Flex>

              <InputGroup width={["100%","100%","100%","50%"]} border={"1px solid #ccc"} _hover={{bg:"#eee", cursor:"pointer"}} onClick={()=>{
                setShowTemplate(showTemplate?false:true)
                setShowClient(false)
              }}>     
                <Input type='text' placeholder='No Template' disabled _hover={{cursor:"pointer"}}/>
                <InputRightAddon children={<BsFillCaretDownFill/>} bg="none" border={"none"}/>
              </InputGroup>
        </Flex>
        <Box display={showTemplate?"block":"none"} position={"absolute"}  left={["0%","0%","0%","51.5%"]} top={["71%","71%","71%","53%"]} minW={["100%","100%","100%","70%"]}  border={"1px solid #ddd"} bg="#fff" zIndex="999">
          <AddTemplates handleChange={handleChange}/>
        </Box>
          <Box borderTop={"1px solid #ccc"} pt={"20px"}>
              <Flex gap="25px" align="center" justify={"flex-end"}>
                <Button onClick={()=>onClose()} bg="none" _hover={{color:"blue", textDecoration:"underline"}}>Close</Button>
                <Button onClick={()=>hanldeLogin()}colorScheme={"twitter"} borderRadius="0px">Create</Button>
              </Flex>
          </Box>
       

    </Stack>
  )
}

