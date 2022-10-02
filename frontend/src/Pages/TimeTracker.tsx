import Timer_Tracker from "../Components/Time_Tracker/Timer_Tracker"

import { useAppSelector } from "../features/hooks"
import { Box, Flex, Image } from "@chakra-ui/react"
import loader from '/Curve-Loading.gif'
export const TimeTracker = () => {
  const tasks = useAppSelector(store=>store.tasksSlice)
  return (
    <div style={{position:"relative"}}>
      <Timer_Tracker/>
      {tasks.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image src={loader} />
      </Flex>:""}
    </div>
  )
}
