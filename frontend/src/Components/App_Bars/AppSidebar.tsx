import { Stack, Text, Flex, Box } from '@chakra-ui/react'

export const CompactAppSidebar = () => {
    return (
        <Box display={["none","none","block","block"]} h="92vh" borderRight="1px solid #bdbdbd" minH={"100%"}>
            <Stack spacing="0">

                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left">
                    <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="time-tracker" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="calendar.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="dashboard.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="reports.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="projects.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="teams.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="clients.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="tags.svg" />
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="settings.svg" />
                </Flex>


                <Flex minH={"100%"} color="white" borderLeft="4px solid #02a9f4" bgColor="white">.</Flex>


            </Stack>
        </Box>
    )
}

export const ExpandedAppSidebar = () => {
    return (
        <Box minH={"100%"} borderRight="1px solid #bdbdbd" >
            <Stack spacing="0">

                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left">
                    <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="time-tracker" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >TIME RACKER</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="calendar.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >CALENDER</Text>
                </Flex>


                <Flex borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <Text fontSize=".8rem" color="#7e8182" >ANALYZE</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="dashboard.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >DASHBOARD</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="reports.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >REPORTS</Text>
                </Flex>


                <Flex borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <Text fontSize=".8rem" color="#7e8182" >MANAGE</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="projects.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >PROJECTS</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="teams.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >TEAMS</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="clients.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >CLIENTS</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="tags.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >TAGS</Text>
                </Flex>


                <Flex _hover={{ bg: "#e4eaee", cursor: "pointer", borderLeft: "4px solid #0277ac" }} borderLeft="4px solid #02a9f4" bgColor="white" p=".8rem 1.8rem .8rem 1rem" textAlign="left" >
                    <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="settings.svg" />
                    <Text color="#333333" fontWeight="500" ml="1.5rem" >SETTINGS</Text>
                </Flex>


                <Flex h="12vh" color="white" borderLeft="4px solid #02a9f4" bgColor="white">.</Flex>
            </Stack>
        </Box>
    )
}

// export { CompactAppSidebar, ExpandedAppSidebar }