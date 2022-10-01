import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./ThirdPart.css"


const ThirdPart = () => {

  const [show, setshow] = useState(false);


  return (
    <Box width={["90%"]} mx={"auto"}>
      <Image width={["100%"]} src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="" />

    </Box>
  )
}

export default ThirdPart