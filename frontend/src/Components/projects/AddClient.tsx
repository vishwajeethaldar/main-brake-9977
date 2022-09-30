import { Box, Input, Stack } from "@chakra-ui/react"
import { useRef } from "react"

export const AddClient = ({handleChange}:{handleChange:Function}) => {
  const ref = useRef<any>(null)

  return (
    <Stack maxW={"100%"} py="15px" px="20px">
        <Input name="client" onChange={
          (e)=>{handleChange(e)
            
          }
          } ref={ref} type={"text"}  placeholder="Add/Find Client" borderRadius={"none"} outline={"1px solid #999"}/>
        <Box>

        </Box>
        <Box>
          
        </Box>
    </Stack>
  )
}
