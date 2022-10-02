import { Flex, Stack, Text, Box, Button, Image } from "@chakra-ui/react"

const SixthPage = () => {
  return (
    <Box marginTop={"90px"} >
      <Flex align={"center"} gap={"15px"} direction={"column"}>
        <Text  fontSize={"2.5em"}>Time tracking apps</Text>
        <Text textAlign={"center"} fontSize={"1.17em"} width={["35%"]}>Clockify works across devices. Track time from anywhere — all data is synced online.</Text>
      </Flex>



      <Flex my={"40px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
            <Image src='https://clockify.me/assets/images/time-tracking-app-desktop.png' width={"100%"}/>
          </Box>
          <Text fontWeight={"bold"} textAlign={"center"}>DESKTOP APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>Windows</Button><Button colorScheme={"twitter"} variant={"outline"}>MAC</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
          </Flex>
        </Stack>



        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
          <Image src='https://clockify.me/assets/images/time-tracking-app-web.png' width={"100%"}/>
          </Box>
          <Text fontWeight={"bold"}  textAlign={"center"}>WEB APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>EDGE</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
          </Flex>
        </Stack>
      </Flex>


      {/* SECOND FLEX */}

      <Flex my={"140px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
            <Image src='https://clockify.me/assets/images/time-tracking-app-mobile.png' width={"100%"}/>
          </Box>
          <Text fontWeight={"bold"}  textAlign={"center"}>MOBILE APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button  colorScheme={"twitter"} variant={"outline"}>Android</Button><Button colorScheme={"twitter"} variant={"outline"}>iOS</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
          </Flex>
        </Stack>



        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
          <Image src='https://clockify.me/assets/images/time-tracking-app-kiosk.png' width={"100%"}/>
          </Box>
          <Text fontWeight={"bold"}  textAlign={"center"}>KIOSK</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>Any Device</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
          </Flex>
        </Stack>
      </Flex>





    
      
    </Box>
  )
}

export default SixthPage