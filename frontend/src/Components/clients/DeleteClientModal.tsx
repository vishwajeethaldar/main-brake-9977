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
    Divider,
    Checkbox
  } from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi';
type deleteClientProps={
    handleDelete:Function;
    name:string
  }


const DeleteClientModal = ({handleDelete, name}:deleteClientProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClick = () => {
      onClose();
        handleDelete();
    }
  return (
    <>
        <Button onClick={onOpen}><FiMoreVertical /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Archive</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
                <Text marginBottom={"20px"}>Are you sure you want to archive {name}?</Text>
                <Box>
                <Checkbox>Also archive all projects assigned to this client</Checkbox>
                </Box>
            </ModalBody>
            <Divider />
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClick} background={"#f44336"} color="white">Archive</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default DeleteClientModal