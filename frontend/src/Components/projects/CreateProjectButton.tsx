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

} from "@chakra-ui/react"
export const CreateProjectButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Button onClick={onOpen}>Create New Project</Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </Box>
  )
}



