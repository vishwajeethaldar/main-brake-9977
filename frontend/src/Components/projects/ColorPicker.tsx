import {Flex, Box,Text,Input} from "@chakra-ui/react"
import { useEffect } from "react";
import { GoCheck } from "react-icons/go";
const colors:Array<string> = ["#f54236","#e91e63","#fe5622","#fe9900", "#ffc107","#8bc24b","#4daf51","#01bdd4","#009688","#03a9f4","#3f51b5","#663ab6","#9c27b0","#607c8a","#785448"]
 
export const ColorPicker = ({setColor,setShowColor,color}:{setColor:Function,setShowColor:Function,color:string}) => {
  
  return (
    <Box>
        <Flex wrap={"wrap"} w="170px" gap="5px" >
            {colors.map((colorCode)=>{
                return <Box onClick={()=>{
                    setColor(colorCode); 
                    setShowColor(true)
                }} key={colorCode} bg={colorCode} w="30px" h="30px" _hover={{cursor:"pointer"}}>
                    <Box  color="#fff" py="8px" px="7px" display={colorCode===color?"block":"none"}>
                        <GoCheck />
                    </Box>
                </Box>
            })}
    </Flex>
    <Box>
    <Flex w="100%" px="15px" h="35px" align="center" gap="15px" border="1px solid #ddd" mt="10px" position={"relative"}>
        
        <Input type="color" position={"absolute"} opacity={"0"} w="100%" zIndex={"998"} _hover={{cursor:"text"}} onChange={(e)=>{
            setColor(e.target.value)
        }}/>
        <Box bg={color} w="20px" h="20px" position={"absolute"}>
         </Box>
        <Text position={"absolute"} left="50px" >Custom Color</Text>
    </Flex>
  </Box>
    </Box>

  )
}
