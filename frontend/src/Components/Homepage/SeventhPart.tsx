
import { Flex,  Text, Box,  Image } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { TiTick } from "react-icons/ti"

const SeventhPart = () => {
    return (
        <Box py={"60px"} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">

            <Flex direction={["column", "row","row", "row"]} justify={"center"} width={"100%"}>
                <Box maxWidth={"300px"}>
                    <Image src='https://clockify.me/assets/images/free-forever-clock-4.svg' />
                </Box>
                <Flex marginTop={"55px"} justify={"center"} gap={"22px"} direction={"column"}>
                    <Text fontWeight={"bold"} marginLeft={"45px"} fontSize={"74px"} color={"#03A9F4"}>FREE</Text>
                    <Text marginLeft={"45px"} marginTop={"-34px"} fontSize={"34px"} color={"#03A9F4"}>FOREVER</Text>
                    <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}>  <TiTick /><Text>Unlimited Users</Text></Flex>
                    <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}><TiTick /><Text>Unlimited tracking</Text></Flex>
                    <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}> <TiTick /><Text>Unlimited projects</Text></Flex>
                    <Flex fontSize={"17px"} color={"#03A9F4"} marginLeft={"45px"} align={"center"}><Text>Upgrade</Text> <AiOutlineArrowRight /></Flex>
                </Flex>
            </Flex>
        </Box>


    )
}

export default SeventhPart