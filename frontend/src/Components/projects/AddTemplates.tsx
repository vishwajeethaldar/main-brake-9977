import { Box, Text,Input, Stack } from "@chakra-ui/react"

const AddTemplates = ({handleChange}:{handleChange:Function}) => {
  return (
    <Stack maxW={"100%"} py="15px" px="20px">
        <Text>
            Upgrade to Premium
        </Text>
        {/* <Input onChange={(e)=>handleChange(e)} name="template" type={"text"} placeholder="Find Templates"/> */}
        <Box>

        </Box>
        <Box>
            
        </Box>
    </Stack>
  )
}

export default AddTemplates