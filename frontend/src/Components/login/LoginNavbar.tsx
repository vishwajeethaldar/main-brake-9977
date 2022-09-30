import { Flex, Text } from "@chakra-ui/react"

const LoginNavbar = () => {
  return (
    <Flex justifyContent="space-between" padding="1.5rem">
        <div>
            <img src="https://app.clockify.me/assets/logo.svg" alt="logo" />
        </div>
        <Flex>
            <Text color="gray">
                Don't have an account?
            </Text>
            <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Sign up</Text>
        </Flex>
    </Flex>
  )
}

export default LoginNavbar