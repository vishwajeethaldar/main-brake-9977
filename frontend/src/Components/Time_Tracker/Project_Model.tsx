import {
    Box,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Flex
} from "@chakra-ui/react"
import { RegistrationForm } from "../projects/RegistrationForm";
import {IoAddCircleSharp} from "react-icons/io5"
export const Project_Model = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Button onClick={onOpen} mt={"10px"} bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}} gap={"10px"} width={"100%"}><IoAddCircleSharp color='#03a9f4' fontSize={"20px"}/><Text fontSize={"sm"} color="#03a9f4">Create new project</Text></Button>
        <Modal onClose={onClose} isOpen={isOpen}  isCentered>
            <ModalOverlay  bg='none'
              backdropFilter='auto'
              backdropInvert='60%'
              backdropBlur='2px'/>
            <ModalContent maxW={"580px"}>
            <ModalHeader borderBottom={"1px solid #ccc"}> 
              <Text fontSize={"1.4em"} color={"#999"} >
                  Create New Project
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody borderBottom={"1px solid #ccc"} py="25px">
               <RegistrationForm/>
            </ModalBody>
            <ModalFooter>
                <Flex gap="25px" align="center">
                  <Button onClick={onClose} bg="none" _hover={{color:"blue", textDecoration:"underline"}}>Close</Button>
                  <Button colorScheme={"twitter"} borderRadius="0px">Create</Button>
                </Flex>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </Box>
  )
}