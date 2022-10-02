import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react'

const LeftPart = () => {
  return (
    <div>
        <Flex justifyContent="space-around" marginTop="2rem">
          <Badge variant='subtle' colorScheme='gray' fontWeight="600" px=".5rem" py=".2rem" borderRadius=".25rem">
            New
          </Badge>
        </Flex>
        <Flex justifyContent="space-around" marginBottom="2rem">
          <Text fontSize="3xl" fontWeight="600" color="white">
            Scheduling
          </Text>
        </Flex>
        <Box>
          <Box>
            <Text marginX="3.2rem" textAlign="center" color="white" fontSize="1.1rem" fontWeight="500">
              Visualize projects on a timeline and plan team's capacity (see who's busy and who's available).
            </Text>
          </Box>
          <Flex justifyContent="space-around" marginTop="2rem">
            <Button bgColor="#333333" color="White" variant='solid' padding=".7rem" borderRadius="none" _hover={{bg:"#181818"}}>
                <Text fontSize="sm" fontWeight="400">
                  SEE HOW IT WORKS  
                </Text>
            </Button>
          </Flex>
        </Box>
        <Box display="block" marginLeft="2rem" marginTop="3rem" paddingBottom="4rem" >
          <img height="100%" width="100%" src="https://drive.google.com/uc?export=view&id=18K9BUx-KvJQVfb9FlmNDXHIjQ2LWYnPM" alt="new Feature Image" />
         
        </Box>
    </div>
  )
}

export default LeftPart