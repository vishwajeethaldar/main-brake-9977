import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import "./AppNav.css"
import { AiOutlineMenu } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { useEffect } from 'react';
import { getUser } from '../../features/users/usersSlice';

const AppNavbar = ({ Open }: { Open: Function }) => {
    const token = useAppSelector(store => store.authSlice.token)
    const user = useAppSelector(store => store.usersSlice.user)
    const [userid, email, p] = token.trim().split(":")
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUser({ token: token, id: userid }))
    }, [])

    const SplitName = user?.name.split(" ")

    //   setTimeout(()=>{
    //     console.log(user)
    //     console.log(SplitName)
    //   },3000)




    return (
        <Flex borderLeft="4px solid #02a9f4" borderBottom="2px solid #bdbdbd" padding=".3rem .8rem" alignContent="center" alignItems="center" justifyContent="space-between">
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
                        button
                    </button>
                </Box>
                <Box py=".6rem" borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <img src="https://app.clockify.me/assets/nav-icons/help.svg" alt="help" />
                </Box>
                <Box py=".6rem" borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <img src="https://app.clockify.me/assets/nav-icons/notification.svg" alt="notification" />
                </Box>
                <Box borderLeft="1px dotted #bdbdbd" px="1.5rem">
                    <Box bgColor="#2a9789" borderRadius="full" p=".4rem .5rem" color="white"><Text fontSize="1.2rem" fontWeight="500">{SplitName?.map((n) => (n[0]))}</Text></Box>
                </Box>
            </Flex>
        </Flex>
    )
}

export default AppNavbar