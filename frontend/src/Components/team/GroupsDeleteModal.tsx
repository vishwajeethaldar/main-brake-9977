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
  } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi';


const GroupsDeleteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button onClick={onOpen}><FiX /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Are you sure you want to delete group Group 1?
            </ModalBody>
  
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button background={"red"} color="white">Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default GroupsDeleteModal