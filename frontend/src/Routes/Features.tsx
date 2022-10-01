import FeaturesData from "../Components/FeaturesPage/FeaturesData";
import NavbarHome from "../Components/Navbar/NavbarHome";
import React from 'react'
import {Box} from "@chakra-ui/react"
const Features = () => {
    return (
        <div>
         <Box backgroundColor={"white"} zIndex={"999"} top={"0px"} position={"sticky"}>   <NavbarHome /></Box>
            <FeaturesData />
        </div>
    )
}

export default Features