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
import { RegistrationForm } from "./RegistrationForm";

export const NewProjectModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Button onClick={onOpen} colorScheme={"twitter"} borderRadius={"none"} px="9px" py="4px">
            <Text  fontSize={"1.4em"} display={["none", "none", "none", "block"]}>
              Create New Project
            </Text>
            <Text fontSize={"1.4em"}  display={["block", "block", "block", "none"]}>
                Create New
            </Text>
          
        </Button>
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



