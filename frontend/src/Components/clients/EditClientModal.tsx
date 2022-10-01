import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Input,
    Radio, RadioGroup, Stack, Flex,
    Textarea,
    Divider
  } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi';


const EditClientModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button onClick={onOpen}><FiEdit2 /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit group</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              <Box>
                  <Box margin={"5px"}>Client name</Box>
                  <Box margin={"10px"}><Input /></Box>
              </Box>
              <Box>
                  <Box margin={"5px"}>Client Address</Box>
                  <Box margin={"10px"}><Textarea placeholder='Enter address' /></Box>
              </Box>
              <Box>
                  <Box margin={"5px"}>Client Note</Box>
                  <Box margin={"10px"}><Textarea placeholder='Enter note' /></Box>
              </Box>
            </ModalBody>
            <Divider />
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button background={"#038fce"} color="white">Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default EditClientModal