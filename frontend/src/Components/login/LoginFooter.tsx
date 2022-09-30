import { Flex, Menu, MenuButton, MenuItem, MenuList, Stack, StackDivider, Text } from "@chakra-ui/react"
import { RiArrowDownSFill } from "react-icons/ri"

const LoginFooter = () => {
    return (
        <Stack marginBottom="3rem">
            <Flex justifyContent="center">
                <Menu>
                    <MenuButton
                        transition='all 0.2s'
                        borderWidth='none'
                    >
                        <Flex alignContent="center" alignSelf="center" alignItems="center"><img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
                            <Text marginLeft=".3rem" color="gray">English</Text> <RiArrowDownSFill color="gray" /></Flex>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>ENGLISH</MenuItem>
                        <MenuItem>Français</MenuItem>
                        <MenuItem>Español</MenuItem>
                        <MenuItem>Português</MenuItem>
                        <MenuItem>Deutsch</MenuItem>
                        <MenuItem>Русский</MenuItem>
                        <MenuItem>日本</MenuItem>
                        <MenuItem>한국어</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <StackDivider />
            <Flex>
                <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="safe logo" />
                <Text marginLeft=".3rem">
                    Your data is safe with us:
                </Text><Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Security</Text> <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Privacy</Text>
            </Flex>
        </Stack>
    )
}

export default LoginFooter