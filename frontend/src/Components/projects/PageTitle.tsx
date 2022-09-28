import {Box, Text} from '@chakra-ui/react'

export const PageTitle = ({title}:{title:string}) => {
  return (
    <Box>
        <Text>
            {title}
        </Text>
    </Box>
  )
}
