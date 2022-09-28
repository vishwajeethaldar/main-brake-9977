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
    Text

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
            <ModalOverlay />
            <ModalContent maxW={"650px"}>
            <ModalHeader borderBottom={"1px solid #ccc"}> 
              <Text fontSize={"1.4em"} color={"#999"} >
                  Create New Project
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody >
               <RegistrationForm/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </Box>
  )
}



