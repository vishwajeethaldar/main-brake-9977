import { Box, Text } from '@chakra-ui/react'
import React from 'react'
type CounterAppProp={
    timeString:string
}
const CounterApp = ({timeString}:CounterAppProp) => {
  return (
    <Box>
        <Text fontWeight={"bold"}>{timeString}</Text>
    </Box>
  )
}

export default CounterApp