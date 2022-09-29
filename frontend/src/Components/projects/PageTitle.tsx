import {Box, Text} from '@chakra-ui/react'

export const PageTitle = ({title}:{title:string}) => {
  return (
    <Box>
        <Text fontSize={["1.6em","1.6em","1.6em","1.6em"]} fontWeight={"600"} color={"#777"}>
            {title}
        </Text>
    </Box>
  )
}
