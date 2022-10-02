import { Stack,Flex, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { projectType } from '../../../../features/types/types'

export const EditProjectCard = ({onClose, project}:{onClose:Function, project:projectType}) => {
  const handleUpdate=()=>{

  }
  return (
    <Stack>
      <Flex>
          <Box>Project Name </Box>
          <Box>{project.name}</Box>
      </Flex>
      <Flex align={"center"} justifyContent="flex-end" gap="20px">
          <Button colorScheme={"telegram"}  onClick={()=>onClose()}>Close </Button>
          <Button  colorScheme={"whatsapp"} onClick={()=>handleUpdate()}>Update</Button>
      </Flex>
    </Stack>
  )
}
