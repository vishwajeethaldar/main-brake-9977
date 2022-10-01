import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const SignUpNavbar = () => {
    
  return (
    <Flex justifyContent="space-between" padding="2rem 4rem">
        <div>
            <Link to="/"><img src="https://app.clockify.me/assets/logo.svg" alt="logo" /></Link>
        </div>
        <Flex>
            <Link to="/login">
            <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Log In</Text>
            </Link>
        </Flex>
    </Flex>
  )
}

export default SignUpNavbar