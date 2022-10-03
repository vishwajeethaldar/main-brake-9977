import { Flex, Text,Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const LoginNavbar = () => {
  return (
    <Flex justifyContent="space-between" padding="1.5rem" direction={["column","column","column","row"]}>
        <Box>
            <Link to="/"><img src="https://app.clockify.me/assets/logo.svg" alt="logo" /></Link>
        </Box>
        <Flex justify={"space-between"} py="10px">
            <Text color="gray">
                Don't have an account?
            </Text>
            <Link to="/signup">
              <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Sign up</Text>
            </Link>

        </Flex>
    </Flex>
  )
}

export default LoginNavbar