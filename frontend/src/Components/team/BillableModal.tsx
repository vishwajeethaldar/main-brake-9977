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
    Radio, RadioGroup, Stack
  } from '@chakra-ui/react'

const BillableModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = React.useState('1')
    return (
      <>
        <Button variant='link' onClick={onOpen}>Change</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit rate</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Text>We'll apply this rate to all entries made by Ravishankar Kumar,
                    except on projects that have their own rate.</Text>
                <Text>What is the new billable rate</Text>
                <Input placeholder='0'/>
                <Box>Apply this billable rate to:</Box>
                <RadioGroup onChange={setValue} value={value}>
      <Box>
        <Radio value='1'>
            Time entries from <Input maxW={"150px"} type={"date"} /> onwards
        </Radio>
      </Box>
      <Box>
      <Radio value='2'>All past and future time entries</Radio>
      </Box>
    </RadioGroup>
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

export default BillableModal