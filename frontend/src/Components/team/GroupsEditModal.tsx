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
    Radio, RadioGroup, Stack, Flex
  } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi';


const GroupsEditModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button onClick={onOpen}><FiEdit2 /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit group</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Flex>
                  <Box>Change name</Box>
                  <Box><Input /></Box>
                </Flex>
              </Box>
            </ModalBody>
  
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

export default GroupsEditModal