import { Badge, Box, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Switch, Text } from '@chakra-ui/react'
import "./AppNav.css"
import { AiOutlineMenu } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { useEffect } from 'react';
import { getUser } from '../../features/users/usersSlice';
// import { logout } from '../../features/auth/authSlice';
import {logout} from "../../features/auth/authSlice"
import { Navigate, useNavigate } from 'react-router-dom';
export default function AppNavbar({ Open }: { Open: Function }) {
    const auth = useAppSelector(store => store.authSlice)
    const user = useAppSelector(store => store.usersSlice.user)
    const [userid, email, p] = auth.token.trim().split(":")
    const dispatch = useAppDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(getUser({ token: auth.token, id: userid }))
    }, [])

    const SplitName = user?.name.split(" ")

    //   setTimeout(()=>{
    //     console.log(user)
    //     console.log(SplitName)
    //   },3000)

 const handlelogout = ()=>{
        dispatch(logout())
  }


    return (

        <Flex maxW={"100%"} borderLeft="4px solid #02a9f4" borderBottom="2px solid #bdbdbd" padding=".3rem .8rem" alignContent="center" alignItems="center" justifyContent="space-between">

            <Flex alignItems="center">
                <Box>
                    <IconButton
                        variant='ghost'
                        colorScheme='#333333'
                        aria-label='Call Sage'
                        fontSize='1.65rem'
                        icon={<AiOutlineMenu />}
                        onClick={() => Open()}
                    />
                </Box>
                <Box mt=".4rem" ml="1.4rem">
                    <img width="75%" src="https://app.clockify.me/assets/logo.svg" alt="logo" />
                </Box>
            </Flex >
            <Flex alignItems="center">
                <Box pl="1rem"><Text>{user?.name}</Text></Box>
                <Box px="1.5rem">
                    <button className="upgrade-btn" >
                        UPGRADE
                    </button>
                </Box>
                <Box py=".6rem" borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <img src="https://app.clockify.me/assets/nav-icons/help.svg" alt="help" />
                </Box>
                <Box py=".6rem" borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <img src="https://app.clockify.me/assets/nav-icons/notification.svg" alt="notification" />
                </Box>
                <Box borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <Menu isLazy>
                        <MenuButton>
                            <Box _hover={{ cursor: "pointer" }} flexWrap="nowrap" bgColor="#2a9789" textAlign="center" padding=".3rem .5rem" borderRadius="25px" color="white">
                                <Text fontSize="1.3rem" fontWeight="500">{SplitName?.map((n) => (n[0]))}</Text>
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem _focus={{bg:"none"}}><Text>{user?.name}</Text></MenuItem>
                            <MenuItem _focus={{bg:"none"}}><Text color="gray" fontSize="1rem">{user?.email}</Text></MenuItem>
                            <MenuDivider/>
                            <MenuItem><Text color="#333333" fontSize="1rem">Profile Settings</Text></MenuItem>
                            <MenuItem><Flex justifyContent="space-between"><Text color="#333333" fontSize="1rem">Dark Theme</Text><Switch ml="4rem"/></Flex></MenuItem>
                            <MenuItem><Text color="#333333" fontSize="1rem">Download</Text></MenuItem>
                            <MenuItem><Flex justifyContent="space-between"><Text color="#333333" fontSize="1rem">Dark Theme</Text><Box ml="4rem" ><Badge colorScheme="green" variant="solid">NEW</Badge></Box></Flex></MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={handlelogout}><Text color="#333333" fontSize="1rem">Log out</Text></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

            </Flex>
            
        </Flex>
    )
}
